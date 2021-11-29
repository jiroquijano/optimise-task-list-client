import {
    getUpdatedTaskLists,
    getUpdatedTaskListAfterUpdatingTask,
    getUpdatedTaskListAfterDeletingTask
} from '../selectors/taskBoardSelector'

/*
    state: {
        taskLists: [],
        tasksSelected: []
    }
*/
const taskBoardReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TASK_LISTS':
            return {
                ...state,
                taskLists: action.taskLists
            }
        case 'CREATE_NEW_LIST':
            return {
                ...state,
                taskLists: [...state.taskLists, action.newList]
            }
        case 'DELETE_LIST':
            return {
                ...state,
                taskLists: state.taskLists.filter((tasks)=>tasks.name !== action.listName)
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
        case 'CLEAR_TASKS_SELECTED':
            return {
                ...state,
                tasksSelected: []
            }
        case 'UPDATE_LISTS':
            return {
                ...state,
                taskLists: getUpdatedTaskLists(state.taskLists, action.updatedLists)
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                taskLists: getUpdatedTaskListAfterUpdatingTask(state.taskLists, action.updatedTask)
            }
        case 'DELETE_TASK':
            return {
                ...state,
                taskLists: getUpdatedTaskListAfterDeletingTask(state.taskLists, action.deletedTask)
            }
        default:
            return state;
    }
}

export default taskBoardReducer;