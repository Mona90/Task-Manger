import React, { Component } from 'react'
import { add_Reminder, remove_Reminder, clear_Reminders} from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'
export class App extends Component {
    state={
        text:"",
        date: new Date()
    }
    render_reminders = () =>{
        const {reminders} = this.props
        return(
            <ul className="list-group">
              {
                  reminders.map(reminder => {
                      return(
                          <li className="list-group-item border d-flex mb-3" key={reminder.id}>
                              <div className="d-flex flex-column">
                                    <p>{reminder.text},</p>
                                    <p className="mb-0">{moment(new Date(reminder.date)).fromNow()}</p>
                              </div>
                              <button type="button" className="btn remove btn-close ms-auto" onClick={()=>this.props.remove_Reminder(reminder.id)}></button>
                          </li>
                      )
                  })
              }
            </ul>
        )
    }
    render() {
        return (
            <div className="app py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-4 box">
                                <div className="reminder-title text-center my-5">
                                    <h2>Task Manager</h2>
                                </div>
                                <div className="mb-3">
                                <input className="form-control" type="text" value={this.state.text} placeholder="Enter what you think..."
                                onChange={(e)=> this.setState({text: e.target.value})}/>
                    </div>
                    <div className="mb-3">

                                <DatePicker
                                className="form-control"
                                value={this.state.date}
                                    selected={this.state.date}
                                    onChange={(date) => this.setState({date:date})}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                    </div>
                                <button className="btn btn-info bg-gradient ms-auto d-block my-3"
                                onClick={()=> {
                                    this.props.add_Reminder(this.state.text, this.state.date)
                                    this.setState({text:"",date:""})
                                }}>Add Reminder</button>

                                {this.render_reminders()}

                                <button className="btn btn-warning bg-gradient ms-auto d-block mb-3" onClick={() => this.props.clear_Reminders()}>Clear Reminder</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
//  function mapDispatchToProps(dispatch){
//      return(
//          add_Reminder = ()=> dispatch(add_Reminder())
//      )
//  }
// function mapStateToProps(state){
//     return{
//         reminders: state

//     }
// }

export default connect(state=>{
    return{
        reminders: state

    }
}, {add_Reminder, remove_Reminder, clear_Reminders})(App)
