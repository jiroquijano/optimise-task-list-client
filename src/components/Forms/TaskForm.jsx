import React, {useState} from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { Input} from '@mui/material';
import moment from 'moment';

const useStyles = makeStyles({
    taskFormRoot: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    formGridContainer: {
        border: 'dashed 2px #D6B656',
        borderRadius:'10px',
        width: '100%'
    },
    inputName: {
        width: '100%',
        padding: '10px 30px'
    },
    descriptionContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    datePickerContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '25px',
        color: '#FFFFFF'
    },
    description: {
        width: '90%',
        height: '90%',
        resize: 'none',
        fontFamily: 'Roboto',
        padding: '10px',
        outline: 'none'
    },
    inputStyle: {
        '&.underline': {
            borderBottom: `2px solid white`
        }
    }
})
 
const TaskForm = ({id, name, description, deadline, setModalOpen, action}) => {
    const classes = useStyles();
    const [taskName, setTaskName] = useState(name);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskDeadline, setTaskDeadline] = useState(deadline);
    
    const handleAction = () =>{
        console.log('TASK FORM: ', {action, id, taskName, taskDescription, taskDeadline})
        setModalOpen(false);
    }

    return (
        <Grid className={classes.taskFormRoot} container flexWrap='nowrap' direction='column'>
            <Grid className={classes.formGridContainer} container item xs={10} justifyContent='center' flexWrap='nowrap' direction='column'>
                <Grid className={classes.inputName} item xs={1}>
                    <Input
                        placeholder='<New Task Name>'
                        sx={{color: '#FFFFFF', width: '100%', textAlign: 'center'}}
                        value={taskName}
                        classes={{
                            root: classes.inputStyle,
                            underline: 'underline'
                        }}
                        onChange={(e)=>{
                            setTaskName(e.target.value);
                        }}
                    />
                </Grid>
                <Grid className={classes.descriptionContainer} item xs={8}>
                    <textarea 
                        className={classes.description}
                        placeholder='<Task Description>'
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                    />
                </Grid>
                <Grid className={classes.datePickerContainer} item xs={1}>
                    <Input
                        type='date'
                        value={moment(taskDeadline).format('YYYY-MM-DD')}
                        sx={{color: '#888888', background: '#FFFFFF', width: '50%', paddingRight: '10px'}}
                        onChange={(e)=>{
                            setTaskDeadline(moment(e.target.value).format('YYYY-MM-DD'));
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container item xs={2} direction='row' alignItems='center' justifyContent='flex-end'>
                <Grid item>
                    <Button 
                        className={classes.confirmButton}
                        variant='contained'
                        style={{background: '#D6B656', marginRight: '10px'}}
                        onClick={handleAction}
                    >
                        {action === 'add' ? 'Create Task' : 'Edit Task'}
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                        onClick={()=>setModalOpen(false)}
                        variant='contained'
                        style={{background: '#D6B656', marginRight: '10px'}}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TaskForm;