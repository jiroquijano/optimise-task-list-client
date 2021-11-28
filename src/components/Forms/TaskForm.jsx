import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
    taskFormRoot: {
        border: 'dashed 2px #D6B656',
        borderRadius:'10px',
        margin: '0px 30px 40px'
    },
    taskFormFooter: {
        padding: '20px'
    }
})
 
const TaskForm = ({id, name, description, deadline, setModalOpen, action}) => {
    const classes = useStyles();
    console.log('TASK FORM: ', {action, id, name, description, deadline})
    return (
        <Grid className={classes.taskFormRoot} container direction='row' alignItems='flex-start'>
            <Grid item xs={10}>
                Template
            </Grid>
            <Grid className={classes.taskFormFooter}
                container item xs={2}
                direction='column'
                alignItems='center'
                justifyContent='flex-end'
            >
                <Grid item>
                    <Button onClick={()=>setModalOpen(false)}>
                        Create Task
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={()=>setModalOpen(false)}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TaskForm;