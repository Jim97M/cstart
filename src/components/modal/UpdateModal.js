import React, {useCallback, useEffect, useRef} from "react";
import { useSpring, animated } from "react-spring";

import { MdClose } from 'react-icons/md';

const UpdateModal = ({showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
        duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if(modalRef.current === e.target){
        setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false);
            console.log("Pressed Modal");
        }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
        document.addEventListener('keydown', keyPress);
    }
  )




}