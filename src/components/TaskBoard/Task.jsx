import React, {useState, useContext, useEffect} from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import TaskIcon from '@mui/icons-material/Task';
import TaskBoardContext from '../../context/TaskBoardContext';
import EditTaskModal from '../Modals/EditTaskModal';
import taskBoardService from '../../services/taskBoardService';
import _ from 'lodash';

const useStyles = makeStyles({
    taskRoot: ({taskState}) => ({
        width: '25rem',
        height: '16rem',
        margin: '10px',
        background: taskState === 'DONE' ? '#D5E8D4':'#FFF2CC',
        border: taskState === 'DONE' ? '2px solid #82B366' : '2px solid #D6B656'
    }),
    taskGridRoot: {
        height: '100%',
        padding: '10px'
    },
    taskName: {
        fontFamily: 'Roboto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: '20px',
        color: '#3B3B3B'
    },
    taskDescription: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '1px solid #D6B656',
        padding: '10px',
        wordBreak: 'break-all',
        overflowY: 'auto',
        whiteSpace:'pre-line'
    },
    taskFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    taskDeadline: ({taskState})=> ({
        display: 'flex',
        color: taskState === 'DUE' ? 'red' : '#3B3B3B'
    }),
});


const Task = ({id, taskName, description, deadline, state:taskState}) => {
    const [isSelected, setSelected] = useState(false);
    const {tasksSelected, taskBoardDispatch} = useContext(TaskBoardContext);
    const classes = useStyles({taskState});
    const [isEditTaskOpen, setEditTaskOpen] = useState(false);

    const handleTaskSelection = () => {
        taskBoardDispatch({
            type: isSelected ? 'REMOVE_TASK_SELECTED' : 'ADD_TASK_SELECTED', //remove if currently selected, add if not
            taskId: id
        });
        setSelected(!isSelected);
    }

    const handleTaskDelete = async () => {
        if(!isSelected) {
            const {data:task} = await taskBoardService.deleteTask(id);
            taskBoardDispatch({
                type: 'DELETE_TASK',
                deletedTask: task 
            });
        }
    }

    const handleTaskEdit = () => {
        if(!isSelected){
            setEditTaskOpen(true);
        } 
    }


    useEffect(()=>{
        if(tasksSelected.includes(id)) {
            console.log(`${taskName}: I AM SELECTED!`);
            console.log(`along with ${tasksSelected}`);
        }
    },[tasksSelected, id, taskName])

    return (
        <Grid item>
            <div className={classes.taskRoot}>
                <Grid className={classes.taskGridRoot} container direction='column'>
                    <Grid className={classes.taskName} item xs={2}>
                        <b>
                            <i>
                                {`${taskName} ${taskState === 'DONE' ? '(Done)' : ''}`}
                            </i>
                        </b>
                    </Grid>
                    <Grid className={classes.taskDescription} item xs={7}>
                        {description}
                    </Grid>
                    <Grid className={classes.taskFooter} container direction='row' item xs={3}>
                        <Grid className={classes.taskDeadline} item xs={7}>
                            {`deadline: ${moment(deadline).format('YYYY-MM-DD')}`}
                        </Grid>
                        <Grid item xs={5} container direction='row' justifyContent='flex-end'>
                            <Checkbox
                                sx={{color: '#D6B656', '&.Mui-checked': {color: '#D6B656',},}}
                                checked={isSelected}
                                onChange={handleTaskSelection} //todo: add to selectedtasks via dispatch
                            />
                            <TaskIcon
                                sx={{
                                    color: !_.isEmpty(tasksSelected) ? '#CCCCCC':'#D6B656',
                                    fontSize: '2rem',
                                    cursor: !_.isEmpty(tasksSelected) ? 'not-allowed':'pointer'
                                }}
                            />
                            <EditIcon 
                                sx={{
                                    color: !_.isEmpty(tasksSelected) ? '#CCCCCC':'#D6B656',
                                    fontSize: '2rem',
                                    cursor: !_.isEmpty(tasksSelected) ? 'not-allowed':'pointer'
                                }}
                                onClick={handleTaskEdit}
                            />
                            <DeleteIcon 
                                sx={{
                                    color: !_.isEmpty(tasksSelected) ? '#CCCCCC':'#D6B656',
                                    fontSize: '2rem',
                                    cursor: !_.isEmpty(tasksSelected) ? 'not-allowed':'pointer'
                                }}
                                onClick={handleTaskDelete}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <EditTaskModal 
                isOpen={isEditTaskOpen}
                setModalOpen={setEditTaskOpen}
                task={{taskName, id, description, deadline}}
            />
        </Grid>
    )
}

export default Task;