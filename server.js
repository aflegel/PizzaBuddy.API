import { Server } from 'ws'

const wss = new Server({ port: 8080 })

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		// eslint-disable-next-line no-console
		console.log(`Received message => ${message}`)
	})
	ws.send('Message Received')
})