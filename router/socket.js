const WebSocket = require('ws');

module.exports = () =>{
    const socket = new WebSocket.Server({port: 5050});
    
    console.log("socket in");
    socket.on('connection', (ws, req)=>{
        ws.on('message',(msg)=>{
            console.log('유저가 보낸 거 : '+ msg);
        })
        ws.interval = setInterval(()=>{
            if(ws.readyState!=ws.OPEN){
            return;
            }
            ws.send("서버에서 클라이언트로 메시지를 보냅니다.");
        },3000);
    })
    
}