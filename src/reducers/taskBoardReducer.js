const taskBoardReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TASK_LISTS' :
            return action.taskLists
        default:
            return state;
    }
}

export default taskBoardReducer;