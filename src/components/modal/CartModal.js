import React from "react";
import ReactDOM from 'react-dom'
import Darkbg from "./DarkBg";
import ModalContent from "./ModalContent";

const Deletemodal = (props) => {
  
  return <React.Fragment>
    {ReactDOM.createPortal(<Darkbg onClose={props.onClose}></Darkbg> , document.getElementById('dark-bg'))}
    {ReactDOM.createPortal(<ModalContent onClose={props.onClose} ></ModalContent> , document.getElementById('modal'))}
  </React.Fragment>;
};

export default Deletemodal;
