/*
    state: {
        taskLists: [],
        tasksSelected: []
    }
*/
const taskBoardReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TASK_LISTS' :
            return {
                ...state,
                taskLists: action.taskLists
            }
        case 'ADD_TASK_SELECTED':
            return {
                ...state,
                tasksSelected: [...state.tasksSelected, action.taskId]
            }
        case 'REMOVE_TASK_SELECTED':
            return {
                ...state,
                tasksSelected: state.tasksSelected.filter((task)=>task!==action.taskId)
            }
        default:
            return state;
    }
}

export default taskBoardReducer;