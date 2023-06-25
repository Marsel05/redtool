import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "TO DO",
    initialState: {
        todo: []
    },
    reducers: {
        addToDo(state, action){
             const newToDO = {
                 id: new Date().toISOString(),
                 title: action.payload,
                 isDone: false
             }
                 state.todo.push(newToDO)
        },
        deleteToDo(state, action){
          state.todo =  state.todo.filter(el => el.id !== action.payload)
        },
        checkToDO(state, action) {
            state.todo = state.todo.map(el => el.id === action.payload ? {...el, isDone: !el.isDone} : el)
        },

    }
})
export const {addToDo, deleteToDo, checkToDO} = todoSlice.actions

export default todoSlice.reducer










