export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (id,todo) => {
    let task = {
        id: id ,
        task: todo ,

    }
    return {
        type: ADD_TODO,
        payload: task,
    }
}

export const deleteTodo = (id) => { 
    return{
        type: DELETE_TODO,
        payload: id ,
    }
}