const url = 'ws://localhost:8080'
const connection = new WebSocket(url)

connection.onopen = () => {
    //connection.send('hey');
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
}

connection.onmessage = (e) => {
    console.log(e.data);
}

document.getElementById('send').onclick = function () {
    const obj = document.getElementById('message');
    connection.send(obj.value);
}