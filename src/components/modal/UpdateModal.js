import React, {useCallback, useEffect, useRef} from "react";
import './UpdateModal.scss';
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
        return () =>  document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div onClick={closeModal} ref={modalRef} className="background">
         <animated.div style={animation}>
           <div className="wrapper" showModal={showModal}>
             <h4>Edit Details</h4>
             <input />
             <input />
            </div>
            <MdClose className="close" aria-label="Close Modal" onClick={() => setShowModal(prev => !prev)} />
         </animated.div>
        </div>
      ): null}
    </>

  )
}

export default UpdateModal;
