import asyncio
import pathlib
import websockets
import json
import itertools
from spacy_mmd import SpacyModel

model = SpacyModel()

async def receiveMessage(websocket, path):
    message = await websocket.recv()
    parsedMessage = json.loads(message)
    nodes = model.get_entities(parsedMessage["data"])
    edges = itertools.combinations(nodes, 2)
   
    graph_message = {}
    graph_message["nodes"] = list(nodes)
   #graph_message["bidirectionalEdges"] = list(edges)
    print(json.dumps({'nodes': list(nodes), 'bidirectionalEdges': list(edges)}))


start_server = websockets.serve(receiveMessage, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()