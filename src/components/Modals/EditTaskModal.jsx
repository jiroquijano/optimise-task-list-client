import React from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import TaskForm from '../Forms/TaskForm';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles({
    modalRoot: ({mobile}) => ({
        background:'#4D4D4D',
        width: mobile ? '90vw':'50vw',
        height: mobile ? '90vh':'70vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #FFFFFF',
        borderRadius: '10px',
        outline: 0,
        display: 'flex',
        alignItems: 'stretch'
    }),
    taskFormContainer: {
    },
    modalHeader: {
        display: 'flex',
        fontFamily: 'Roboto',
        alignItems: 'center',
        fontSize: '20px',
        color: '#FFFFFF',
        padding: '20px'
    },
    taskFormFooter: {
        padding: '20px'
    }
});

const EditTaskModal = ({isOpen, setModalOpen, task={}}) => {
    const mobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles({mobile});
    return (
        <Modal 
            open={isOpen}
        >
            <div className={classes.modalRoot}>
                <Grid container direction='column' flexWrap='nowrap'>
                    <Grid className={classes.modalHeader} item xs={2}>
                        Edit Task
                    </Grid>
                    <Grid className={classes.taskFormContainer} container item xs={10}>
                        <TaskForm
                            id={task.id}
                            name={task.taskName}
                            description={task.description}
                            deadline={task.deadline}
                            setModalOpen={setModalOpen}
                            action='edit'
                        />
                    </Grid>
                </Grid>
            </div>
        </Modal>
    )
}

export default EditTaskModal;