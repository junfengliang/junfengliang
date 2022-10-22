import React, { useState,useRef } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';
import * as uuid from 'uuid';

function PlacementMultiExample() {
    const [arr,setArr] = useState([]);
    const [count,setCount] = useState(1);
    let ref = useRef();
    
    function addMessage(message){
        var id  = uuid.v4();
        let arrData = [...arr]
        arrData.push({
            id: id,
            message:message + '> ' + count,
        })
        setTimeout(()=>{remove(id)},5000);
        ref.current = arrData;
        console.log('add arr',arrData)
        setArr(arrData)
        setCount(count +1)
    }
    function remove(id){
        if(!ref.current || ref.current.length==0){
            return
        }
        console.log('remove ', id,ref.current)
        let arrData = []
        ref.current?.forEach((item,index) =>{
            console.log(item.id,id);
            if(item.id !=id){
                arrData.push(item);
            }
        })

        console.log('remove arr',arrData)
        ref.current = arrData;
        setArr(arrData);
    }
    const toasts = arr.map((item,index) =>
    <Toast key={item.id} onClose={() => remove(item.id)} show={true}>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">just now</small>
    </Toast.Header>
    <Toast.Body>{item.message}</Toast.Body>
  </Toast>
);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <Button onClick={() => addMessage('message test!!')}>Show Toast</Button>

      <ToastContainer position="top-end" className="p-3">
        {toasts}
      </ToastContainer>
    </div>
  );
}

export default PlacementMultiExample;