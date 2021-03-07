
import asyncio
import pathlib
import ssl
import websockets

uri = "ws://localhost:8765"
async def send_test():
    async with websockets.connect(
        uri
    ) as websocket:
        await websocket.send("{\"data\": \"Mitch is smellier than others in Kentucky\"}")

asyncio.get_event_loop().run_until_complete(send_test())
