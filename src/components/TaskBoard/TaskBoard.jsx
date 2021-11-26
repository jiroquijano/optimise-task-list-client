import React from 'react';
import TaskList from './TaskList';

const TaskBoard = ({taskLists}) => {
    return (
        <>
            {
                taskLists.map((list)=>{
                    return <TaskList list={list}/>
                })
            }
        </>
    )
}

export default TaskBoard;