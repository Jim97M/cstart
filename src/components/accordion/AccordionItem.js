import "./Accordion.scss";
import { useRef } from "react";
import ReactPlayer from "react-player";
import {
  FiEdit, FiEye, FiTrash2, FiArrowRight
} from "react-icons/fi"
// import Button from "../buttons/Button";

// import {FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import Modal from 'react-modal';
import FilePreviewer from "../filepreview/FilePreview";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');



const AccordionItem = ({ tutorial_name, tutorial_description, name, active, onToggle }) => {
  const contentEl = useRef();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
      {tutorial_name}
      <div>
        <span className="control">{active ? "—" : "+"} </span>

        <FiEye size={22} style={{marginRight: 10}} color="green" />
        <FiEdit size={22} style={{marginLeft: 10}} onClick={openModal} />
        <FiTrash2 size={22} style={{marginLeft: 30}} color="red"/>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Course</h2>
        <button style={{border: 'none', backgroundColor: 'white'}} onClick={closeModal}><h2>X</h2></button>
        </div>
        <form>    
           <div className='input_wrapper'>
                <div className='top_content_wrapper'>
              <div className='tutorial_name'>
                <label>Tutorial Name</label>
                 <input name='name_input' type='text' placeholder='Please Enter Tutorial Name' className='name_input' />
              </div>
              <div className='tutorial_description'>
              <label>Tutorial Description</label>
                <textarea className='textarea' rows={12} cols={60} />
              </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>

              <FilePreviewer />
              <div style={{marginLeft: 150, marginTop: 100}}>
              <button style={{height: 70, width: 150, backgroundColor: 'blue', border: 'none', borderRadius: 60}}> <h2 style={{color: 'white', }}>Add Tutorial</h2> </button>
            </div>
              </div>

            </div>
        </form>
      </Modal>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
     <div style={{marginLeft: 20, marginTop: 30, marginBottom: 20, height: 500, width: 1400, boxShadow: "0 0 3px 2px #cec7c759", padding: 20,  borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
        <div style={{width: 2000}}>
         <ReactPlayer
         className='react-player fixed-bottom'
         url= {`${name}`}
         width='90%'
         height='90%'
         style={{marginTop: -50}}
         controls = {false}
         />
         </div>
         <div style={{display:'flex', marginLeft: 10, flexDirection: 'column'}}>
         {/* <h5 style={{marginLeft: 200}}> {tutorial_name}  </h5>  */}
          
         {/* <div style={{ marginTop: 10, height: 40, width: 130, boxShadow: "0 0 3px 2px #cec7c759", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        
         </div> */}
         <h2 style={{marginLeft: 100}}>{tutorial_name}</h2>
          <p style={{marginLeft: 50, fontWeight: 'revert-layer', fontSize: 16}}>
            {tutorial_description}
          </p>
          {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
         <Button disabled> Activate</Button>
         <div style={{marginTop: 25, display: 'flex', flexDirection: 'row'}}>
         <div
           style={{ height: 55, width: 55, boxShadow: "0 0 3px 2px #cec7c759",  borderRadius: 20, justifyContent: 'center', display: 'flex', alignItems: 'center'}}
           
          >
          <FaThumbsDown
              size={30}
          />
        </div>
        <div
          style={{ marginLeft: 20, height: 55, width: 55, boxShadow: "0 0 3px 2px #cec7c759",  borderRadius: 20, justifyContent: 'center', display: 'flex', alignItems: 'center'}}
          >
          <FaThumbsUp
           size={30}
            />
        </div>
        </div>
         </div> */}
         <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: 40, marginRight: 40, marginTop: 30}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
               <button style={{backgroundColor: '#D1D100', border: 'none', width: 230, height: 65, fontSize: 23, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 8, marginRight: 5}}> <p style={{fontWeight: 'bold', marginLeft: 14}}>Enroll Now</p> <FiArrowRight size={29} style={{marginTop: 4}} /> </button>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
               <button style={{ backgroundColor: 'black', border: 'none', borderWidth: 2, width: 230, height: 65, fontSize: 23, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 8, marginRight: 5}}> <p style={{fontWeight: 'bold', color: 'white', marginLeft: 14}}>Download Now</p> <FiArrowRight size={29} style={{marginTop: 4}} /> </button>
          </div>
          </div>
         </div>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
