import { WebSocket } from 'ws'

const wss = new WebSocket({ port: 8080 })

// Broadcast to all.
wss.broadcast = function broadcast(data) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data)
		}
	})
}

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data) {
		// Broadcast to everyone else.
		wss.clients.forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				// eslint-disable-next-line no-console
				console.log(`Received message => ${data}`)
				client.send('Received: ' + data)
			}
		})
	})
})