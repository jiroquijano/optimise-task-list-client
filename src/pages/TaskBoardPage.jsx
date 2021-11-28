import React, {useEffect, useReducer} from 'react';
import _ from 'lodash';
import {makeStyles} from '@mui/styles/'
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmptyTaskBoardSpiel from '../components/EmptyTaskBoardSpiel';
import AddListTemplate from '../components/AddListTemplate';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import TaskBoardContext from '../context/TaskBoardContext';
import taskBoardReducer from '../reducers/taskBoardReducer';
import taskBoardService from '../services/taskBoardService';

const useStyles = makeStyles({
    rootGrid: ({mobile}) => ({
        background: '#3B3B3B',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: mobile ? 'flex-start':'center'
    }),
    dockedContainer: ({mobile}) => ({
        background: '#4D4D4D',
        height: mobile ? '50px':'100vh',
        width: mobile ? '100vw':'auto',
        borderRight: mobile ? '':'solid 2px #2E2E2E',
        borderBottom: mobile ? 'solid 2px #2E2E2E' : '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: mobile ? 'flex-end':'center'
    }),
    taskBoardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        padding: '20px'
    }
});

const TaskBoardPage = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles({mobile});
    const [taskBoard, taskBoardDispatch] = useReducer(taskBoardReducer, {taskLists:[], tasksSelected:[]});
    
    useEffect(()=>{
        const fetchAllLists = async () => {
            const {data} = await taskBoardService.fetchAllLists();
            taskBoardDispatch({
                type: 'POPULATE_TASK_LISTS',
                taskLists: data
            });
        };
        fetchAllLists();
    },[]);

    return (
        <TaskBoardContext.Provider value={{
            taskLists: taskBoard.taskLists,
            tasksSelected: taskBoard.tasksSelected,
            taskBoardDispatch
        }}>
            <Grid className={classes.rootGrid} container direction={mobile ? 'column' : 'row'}>
                <Grid className={classes.dockedContainer} xs={2} sm={3} item >
                    {mobile ? <div>mobile</div> : <AddListTemplate/>}
                </Grid>
                <Grid className={classes.taskBoardContainer} xs={10} sm={9} container item>
                    {
                        _.isEmpty(taskBoard.taskLists) ?
                        (
                            <EmptyTaskBoardSpiel/>
                        ):(
                            <TaskBoard/>
                        )
                    }
                </Grid>
            </Grid>
        </TaskBoardContext.Provider>
    )
}

export default TaskBoardPage;