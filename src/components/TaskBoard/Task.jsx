import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    taskRoot: {
        width: '25rem',
        height: '13rem',
        margin: '10px',
        background: '#FFF2CC',
        border: '2px solid #D6B656'
    }
})

const Task = ({id, taskName, description, deadline, state}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <div className={classes.taskRoot}>
                TASK!
            </div>
        </Grid>
    )
}

export default Task;