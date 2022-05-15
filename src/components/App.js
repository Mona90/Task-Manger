import React, {  useState } from 'react'
import { add_Reminder, remove_Reminder, clear_Reminders} from '../store/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import PopupComponent from './Popup';
import { Lists } from './style';

export const App=(props)=>{
    
     const [text, setText]= useState("")
     const [date, setDate]= useState(new Date())
     const [popupItem, setPopupItem] = useState(null)
   
    const renderReminders = () => {
        const reminders = props.reminders
        const closeModal = () => {
            setPopupItem(null)
        }
        return (
            <>
                <Lists className="col-6">
                <h3>In progress</h3>
                    <ul className="list-group">
                    {
                        reminders.filter((reminder)=>reminder.status === 'in progress').map(progressEL=>{
                            return(
                            <li className="list-group-item d-flex mb-3" key={progressEL.id}>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={() =>{setPopupItem(progressEL)} }/>
                            <div className="flex-grow-1 ">
                                    <p>{progressEL.text}</p>
                                    <div className='d-flex justify-content-between'>
                                        <span className="mb-0">{moment(new Date(progressEL.date)).fromNow()}</span>
                                        <span className='status'>{progressEL.status}</span>
                                    </div>
                            </div>
                            <button type="button" className="btn remove btn-close ms-auto text-warning" onClick={()=>props.remove_Reminder(progressEL.id)}></button>
                        </li>
                            )
                        })
                    }
                    </ul>
                    
                </Lists>
                <Lists className="col-6">
                    <h3>Done</h3>
                    <ul className="list-group">
                    {
                        reminders.filter((reminder)=>reminder.status === 'done').map(doneEl=>{
                            return(
                            <li className="list-group-item d-flex mb-3" key={doneEl.id}>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={() =>{setPopupItem(doneEl)} }/>
                            <div className="flex-grow-1">
                                    <p>{doneEl.text},</p>
                                    <div className='d-flex justify-content-between'>
                                        <span className="mb-0">{moment(new Date(doneEl.date)).fromNow()}</span>
                                        <span className='status'>{doneEl.status}</span>
                                    </div>
                            </div>
                            <button type="button" className="btn remove btn-close ms-auto" onClick={()=>props.remove_Reminder(doneEl.id)}></button>
                        </li>
                            )
                        })
                    }
                    </ul>
                </Lists>
                {popupItem && (
                <PopupComponent closeModal={closeModal} popupItem={popupItem}/>
                )}
            </>
        );
      };

        return (
            <div className="app py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-10 box">
                                <div className="reminder-title text-center my-5">
                                    <h2>Task Manager</h2>
                                </div>
                                <div className="mb-3">
                                <input className="form-control" type="text" value={text} placeholder="Enter what you think..."
                                onChange={(e)=> setText(()=>e.target.value)}/>
                    </div>
                    <div className="mb-3">

                                <DatePicker
                                className="form-control"
                                value={date}
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                    </div>
                                <button className="btn btn-info bg-gradient ms-auto d-block my-3"
                                onClick={()=> {
                                    props.add_Reminder(text, date, "in progress")
                                    setText("")
                                    setDate("")
                                }}>Add Reminder</button>
                                <div className='row justify-content-evenly'>
                                    
                                        {renderReminders()}
                                    
                                </div>

                                <button className="btn btn-warning bg-gradient ms-auto d-block mb-3" onClick={() => props.clear_Reminders()}>Clear Reminder</button>
                        </div>
                    </div>

                </div>
            </div>
        )

}


export default connect(state=>{
    return{
        reminders: state

    }
}, {add_Reminder, remove_Reminder, clear_Reminders})(App)
