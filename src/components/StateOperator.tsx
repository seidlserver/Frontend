import React from 'react';
import '../styles/StateOperator.scss';
import { useState, useEffect } from "react";
import SockJS from 'sockjs-client';
import StompJS from 'stompjs';

export interface StateMessage{
    action: "START" | "STOP" | "RESTART" | "INFO",
    state: "UP" | "DOWN" | "UNKNOWN";
}

var socket: WebSocket;
var client: StompJS.Client;

function StateOperator(){
    const [state, setState] = useState<"UP" | "DOWN" | "UNKNOWN">("UNKNOWN");
    const [connected, setConnected] = useState<boolean>(false);
    
    useEffect(() =>{
        connect()
    }, [])

    const connect = () =>{
        socket = new SockJS('http://localhost:8080/endpoint');
        client = StompJS.over(socket);
        client.connect({}, () => {
            setConnected(true);
            info();
            client.subscribe('/server/state', (frame) => {
                let state: "UP" | "DOWN" | "UNKNOWN" = frame.body as "UP" | "DOWN" | "UNKNOWN";
                setState(state);
            });
        });
        socket.onclose = () => {
            console.log('close');
            client.disconnect(()=>{});
            setConnected(false);
        };
    }
    const disconnect = () =>{
        if (client != null) {
            client.disconnect(()=>{});
        }
        setConnected(false);
    }
    const start = () =>{
        client.send('/server/change', {}, JSON.stringify({action: 'START'}));
    }
    const stop = () =>{
        client.send('/server/change', {}, JSON.stringify({action: 'STOP'}));
    }
    const restart = () =>{
        client.send('/server/change', {}, JSON.stringify({action: 'RESTART'}));
    }
    const info = () =>{
        client.send('/server/change', {}, JSON.stringify({action: 'INFO'}));
    }
    return(
        <div>
            <button onClick={connect} disabled={connected}>
                CONNECT
            </button>
            <button onClick={disconnect} disabled={!connected}>
                DISCONNECT
            </button>
            <button onClick={start} disabled={!connected}>
                START
            </button>
            <button onClick={stop} disabled={!connected}>
                STOP
            </button>
            {state}
        </div>
        
    );
}

export default StateOperator;
