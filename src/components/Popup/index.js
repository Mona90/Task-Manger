import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { edit_Reminder } from '../../store/actions';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { Modal } from './style';
// import moment from 'moment';



function PopupComponent(props) {
  // console.log('id', props.popupItem)
  // const data = props.popupItem
  //   const taskText = useRef(null)
    const [value, setValue] = useState(props.popupItem)
    console.log('from popup', value.status)
  return (
            <Popup open={true} closeOnDocumentClick onClose={props.closeModal}>
              <Modal className="modal" style={{background:'#000'}}>
                <Link className="close" to="/" onClick={props.closeModal}>
                  &times;
                </Link>
                <input type="text"  defaultValue={value.text} onChange={(e)=> setValue({...value,text : e.target.value})}/>
                <p className="mb-0">{value.date}</p>
                <input type="date" onChange={(e)=> setValue({...value,date : e.target.value})}/>
                {/* radio check */}
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
                <button onClick={()=>props.edit_Reminder(value)}>Edit</button>
                {/* <button onClick={()=>console.log('558', value)}>Edit</button> */}

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