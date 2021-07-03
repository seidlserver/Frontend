import React from 'react';
import '../styles/StateOperator.scss';
import { useState, useEffect } from "react";
import SockJS from 'sockjs-client';
import StompJS from 'stompjs';

function StateOperator(){
    useEffect(() =>{
        
    }, [])

    const connect = () =>{
        const socket = new SockJS('http://localhost:8080/endpoint');
        var stompClient = StompJS.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/server/state', function (state) {
                console.log(state);
            });
        });
    }

    return(
        <button onClick={connect}>
            Socket
        </button>
    );
}

export default StateOperator;
