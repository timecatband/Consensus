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
    print("lolcats")
    print(parsedMessage)
    print(message)

    if parsedMessage["type"] == "GRAPH_DATA":
        nodes = model.get_entities(parsedMessage["data"])
        edges = itertools.combinations(nodes, 2)
        await websocket.send(
            json.dumps({'nodes': list(nodes), 'edges': list(edges)}));
    if parsedMessage["type"] == "WORD_VEC":
        req = parsedMessage["data"]
        vecReply = model.get_vec(req)
        print(req)
        print(vecReply)
        await websocket.send(json.dumps(
            [float(f) for f in list(vecReply)]
        ))


start_server = websockets.serve(receiveMessage, "localhost", 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()