import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { edit_Reminder } from '../../store/actions';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Modal } from './style';



function PopupComponent(props) {

  const [value, setValue] = useState(props.popupItem)
    console.log('from popup', value.status)
    
    const handleEdit = async(value)=>{

        await props.edit_Reminder(value)
          props.closeModal()
        
 
      
    }

  return (
            <Popup open={true} closeOnDocumentClick onClose={props.closeModal} style={{transition:'all 0.4s ease-in-out'}}>
              <Modal className="modal" style={{background:'#000'}}>
                <Link className="close" to="/" onClick={props.closeModal}>
                  &times;
                </Link>
                <div className='container'>
                <input type="text"  className='modal-text' defaultValue={value.text} onChange={(e)=> setValue({...value,text : e.target.value})}/>
                
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" value='in progress' id="flexRadioDefault1" onChange={(e)=> setValue({...value,status : e.target.value})}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    In progress
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" value='done' id="flexRadioDefault2"  onChange={(e)=> setValue({...value,status : e.target.value})}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Done
                  </label>
                </div>
                <button className='btn btn-warning d-block ml-auto' onClick={()=>handleEdit(value)}>Edit</button>
                </div>
              </Modal>
            </Popup>
  )
}
// export default PopupComponent
export default connect(state=>{
    return{
        reminders: state

    }
}, {edit_Reminder}) (PopupComponent)