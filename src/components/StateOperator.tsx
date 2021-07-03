import React from 'react';
import '../styles/StateOperator.scss';
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

function StateOperator(){

    useEffect(() =>{
        const socket = socketIOClient("http://127.0.0.1:8080/")
        socket.on("server/status", )
    }, [])
    return(
        <div></div>
    );
}

export default StateOperator;
