import React, {useContext} from 'react';
import TaskList from './TaskList';
import TaskBoardContext from '../../context/TaskBoardContext';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const TaskBoard = () => {
    const {taskLists} = useContext(TaskBoardContext);
    const mobile = useMediaQuery('(max-width:600px)');
    return (
        <Grid container item spacing={3} justifyContent='center' alignItems='center' direction={mobile ? 'column':'row'}>
            {
                taskLists.map((list)=>{
                    return (
                        <TaskList
                            key={list._id}
                            id={list._id}
                            listName={list.name}
                            tasks={list.tasks}
                        />
                    )
                })
            }
        </Grid>
    )
}

export default TaskBoard;