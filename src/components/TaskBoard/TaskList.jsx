import React from 'react';
import Task from './Task';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    taskListRoot: {
        background: '#FFFFFF',
        width: '30rem',
        height: '40rem'
    }
});

const TaskList = ({listName, tasks, id}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <div className={classes.taskListRoot}>
                <Grid container>
                    {
                        tasks.map((task)=>{
                            return (
                                <Task
                                    key={task._id}
                                    id={task._id}
                                    taskName={task.name}
                                    description={task.description}
                                    deadline={task.deadline}
                                    state={task.state}
                                />
                            )
                        })
                    }
                </Grid>
            </div>
        </Grid>
    );
}

export default TaskList;