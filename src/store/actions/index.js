import { ADD_REMINDER, CLEAR_REMINDERS, EDIT_REMINDER, REMOVE_REMINDER  } from "../types";

export const add_Reminder = (text, date, status)=>{
    const action = {
        type: ADD_REMINDER,
        text,
        date,
        status
    }
    console.log("add", action)
    return action
}

export const edit_Reminder = (value) =>{
    const action ={
        type:EDIT_REMINDER,
        value
    }
    console.log("edit", action)
    return action
}

export const remove_Reminder = (id) =>{
    const action = {
        type: REMOVE_REMINDER,
        id
    }
    console.log("remove ", action)
    return action
}

export const clear_Reminders = () =>{
    const action={
        type: CLEAR_REMINDERS
    }
    return action
}