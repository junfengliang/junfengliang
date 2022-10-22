import React, { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import {addMessage} from '../../global/message'

function PlacementMultiExample() {

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <Button onClick={() => addMessage('message event - compiled client and server successfully in 2.6s (2059 modules) test!!')}>Show Toast</Button>
    </div>
  );
}

export default PlacementMultiExample;