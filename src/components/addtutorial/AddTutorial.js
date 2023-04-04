import React from 'react';
import './AddTutorial.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import FilePreviewer from '../filepreview/FilePreview';

const AddTutorial = () => {
    return (
        <div className='container'>
            <Sidebar />
        <div className="listContainer">
            <Navbar/>
            <div className="heading">
              <h6>Add Tutorial</h6>
            </div>
            <div className='input_wrapper'>
                <div className='top_content_wrapper'>
              <div className='tutorial_name'>
                <label style={{fontWeight: 'bold', fontSize: 16}}>Tutorial Name</label>
                 <input name='name_input' type='text' placeholder='Please Enter Tutorial Name' className='name_input' />
                 <FilePreviewer />
            
              </div>
              <div className='tutorial_description'>
              <label style={{fontWeight: 'bold', fontSize: 16}}>Tutorial Description</label>
                <textarea className='textarea' rows={15} cols={80} style={{borderRadius: 20}} />
                <div style={{marginLeft: 150, marginTop: 100}}>
              <button style={{height: 70, width: 250, backgroundColor: 'blue', border: 'none', borderRadius: 60}}> <h2 style={{color: 'white', }}>Add Tutorial</h2> </button>
            </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default AddTutorial;
