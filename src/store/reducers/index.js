import { ADD_REMINDER, CLEAR_REMINDERS, EDIT_REMINDER, REMOVE_REMINDER } from "../types"
import { bake_cookie, read_cookie } from 'sfcookies'

const reminders = (state=[], action) => {
    // bake_cookie('reminders')

    let reminders = state;
    state = read_cookie('reminders');
    if(action.type === ADD_REMINDER){
        reminders = [...state, {text: action.text, date: action.date, id: Math.random(),status:action.status}];
        bake_cookie('reminders', reminders)
        console.log("from reducers ",  reminders)
        return reminders
    }else if(action.type === EDIT_REMINDER){
        console.log('return data outside loop')


        for(let i=0; i<reminders.length; i++){
            console.log('return data inside loop', action)

                 if(reminders[i].id === action.value.id){
                     console.log('return data', reminders[i].id, action.id)
                     reminders[i] = action.value
                 }
                
        }
        bake_cookie('reminders', reminders)

        // const targetElement = action
        console.log('from edit reducer', reminders)
        return reminders



    }else if(action.type === REMOVE_REMINDER){
        reminders = state.filter(reminder => reminder.id !== action.id)
        bake_cookie('reminders', reminders)
        return reminders
    }
    else if(action.type === CLEAR_REMINDERS){
        reminders = []
        bake_cookie('reminders', reminders)
        return reminders
    }
    else{
        return state
    }
}

export default reminders