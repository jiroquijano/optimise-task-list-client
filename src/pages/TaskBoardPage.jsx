import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles/'
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmptyTaskBoardSpiel from '../components/EmptyTaskBoardSpiel';
import AddListTemplate from '../components/AddListTemplate';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import axios from 'axios';
import _ from 'lodash';

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
        height: '100%'
    }
});

const TaskBoardPage = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles({mobile});
    const [taskLists, setTaskLists] = useState([]); //temporary
    
    useEffect(()=>{
        const fetchLists = async () => {
            try {
                const result = await axios.get('http://localhost:4000/api/lists');
                setTaskLists([...result.data]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLists();
    },[]);

    return (
        <Grid className={classes.rootGrid} container direction={mobile ? 'column' : 'row'}>
            <Grid className={classes.dockedContainer} xs={2} sm={3} item >
                {mobile ? <div>mobile</div> : <AddListTemplate/>}
            </Grid>
            <Grid className={classes.taskBoardContainer} xs={10} sm={9} item>
                {
                    _.isEmpty(taskLists) ? 
                    (
                        <EmptyTaskBoardSpiel/>
                    ):(
                        <TaskBoard
                            taskLists={taskLists}
                        />
                    )
                }
            </Grid>
        </Grid>
    )
}

export default TaskBoardPage;