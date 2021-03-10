
import asyncio
import pathlib
import ssl
import websockets

uri = "ws://localhost:8765"
async def send_test():
    async with websockets.connect(
        uri
    ) as websocket:
        await websocket.send(
            "{\"type\": \"WORD_VEC\", \"data\": \"Mitch McConnell\"}")
        reply = await websocket.recv()
        print(reply)

asyncio.get_event_loop().run_until_complete(send_test())
