import React from 'react';
/*
    Task = {
        _id: ObjectId,
        name: String,
        description: String,
        deadline: Date,
        state: ['ONGOING','COMPLETED','DUE']
    }
    List = {
        _id: ObjectId,
        name: String,
        tasks: Task[]
    }
    TaskBoardContext = {
        taskLists: List[]
        dispatch: <taskBoardReducer dispatch>
    }
*/
const TaskBoardContext = React.createContext();

export default TaskBoardContext;