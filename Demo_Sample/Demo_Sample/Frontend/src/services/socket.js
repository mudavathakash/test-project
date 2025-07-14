let socket;

export const connectSocket = () => {
  socket = new WebSocket('ws://localhost:8080/ws');
};

export const sendMessage = (text) => {
  socket.send(JSON.stringify({ user: 'Me', text }));
};

export const onMessage = (callback) => {
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    callback(data);
  };
};
