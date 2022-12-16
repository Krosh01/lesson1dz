import { ADD_TODO, DELETE_TODO } from "../Actions/action"

const initialSatate = {
    todos: [],
}

const reducer = (state =  initialSatate,action) => {
    switch (action.type){
        case ADD_TODO:
            return{
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        task: action.payload.task
                    }
                ]
            }
        case DELETE_TODO :
            return{
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload)
                ]
            }
        default:
            return state    
    }
}

export default reducer ;