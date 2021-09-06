import React from "react"
import ReactDOM from 'react-dom';
import './App.css';
const Modal = (props)=>{
   
    return (
        ReactDOM.createPortal(props.children,
            document.getElementById('modal'))
    )
}

const ModalContent = ()=>{
   return(
       <div class="modal">
         <h1> I am Modal</h1>
       </div>
   )
}

export {Modal,ModalContent}