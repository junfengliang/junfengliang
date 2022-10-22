import React, { useState,useRef, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { InfoCircle } from "react-bootstrap-icons";


export function ToastMessage() {
    const [arr,setArr] = useState([]);
    function cb(data){
        setArr(data)
    }
    useEffect(()=>{
        setCallback(cb)
    },[])
    const toasts = arr.map((item,index) =>
        <Toast key={item.id} onClose={() => remove(item.id)} show={true}>
            <Toast.Header>
            <InfoCircle style={{marginRight:10}} />
            <strong className="me-auto">{item.title}</strong>
            </Toast.Header>
            <Toast.Body>{item.message}</Toast.Body>
        </Toast>
    );

  return (
      <ToastContainer position="top-end" className="p-3">
        {toasts}
      </ToastContainer>
  );
}
//#region data
var callback;
var seq = 0;
var msgArr = [];

// 消息延迟关闭时间，单位：毫秒
var delay = 5000;

export function setCallback(cb){
    callback = cb;
}
export function getMessage(){
    return [...msgArr];
}
export function addMessage(message,title){
    var id  = seq++;
    msgArr.push({
        id: id,
        message: message,
        title: title
    })
    setTimeout(()=>{remove(id)},delay);
    
    console.log('add arr',msgArr)
    if(callback){
        callback(getMessage())
    }
}
function remove(id){
    if(msgArr.length==0){
        return
    }
    console.log('remove ', msgArr)
    let arrData = []
    msgArr.forEach((item,index) =>{
        console.log(item.id,id);
        if(item.id !=id){
            arrData.push(item);
        }
    })

    console.log('remove arr',arrData)
    msgArr = arrData;
    if(callback){
        callback(getMessage())
    }
}

//#endregion