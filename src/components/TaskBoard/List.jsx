import React, {useContext, useState} from 'react';
import Task from './Task';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TaskBoardContext from '../../context/TaskBoardContext';
import _ from 'lodash';
import taskBoardService from '../../services/taskBoardService';
import AddTaskModal from '../Modals/AddTaskModal';

const useStyles = makeStyles({
    taskListRoot: {
        background: '#FFFFFF',
        width: '30rem',
        height: '40rem',
        padding: '10px',
        borderRadius: '5px'
    },
    listGridRoot: {
        width: '100%',
        height: '100%'
    },
    listHeaderName: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '30px',
        fontFamily: 'Roboto',
        paddingLeft: '10px'
    },
    listHeaderAddIconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tasksContainer: {
        background: '#CCCCCC',
        padding: '10px',
        borderRadius: '5px',
        overflowY: 'scroll'
    },
    listFooter:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    moveSpiel:{
        display: 'flex',
        fontFamily: 'Roboto',
        alignItems: 'center',
        cursor: 'pointer'
    }
});

const List = ({listName, tasks, id}) => {
    const classes = useStyles();
    const {tasksSelected, taskBoardDispatch} = useContext(TaskBoardContext);
    const [isAddTaskOpen, setAddTaskOpen] = useState(false);

    const deleteListHandler = async () => {
        const {data} = await taskBoardService.deleteList(listName);
        taskBoardDispatch({
            type: 'DELETE_LIST',
            listName: data.name
        });
    }

    const addTaskHandler = async () => {
       setAddTaskOpen(true);
    }

    const moveTaskHandler = async () => {
        const {data} = await taskBoardService.moveTasks(tasksSelected, listName);
        taskBoardDispatch({
            type: 'UPDATE_LISTS',
            updatedLists: data.listsUpdated
        });
        taskBoardDispatch({
            type: 'CLEAR_TASKS_SELECTED'
        });
    }

    return (
        <Grid item>
            <div className={classes.taskListRoot}>
                <Grid className={classes.listGridRoot} container direction='column'>

                    <Grid container item xs={1}>
                        <Grid className={classes.listHeaderName} item xs={9}>
                            {listName}
                        </Grid>
                        <Grid className={classes.listHeaderAddIconContainer} item xs={3}>
                            {
                                _.isEmpty(tasksSelected) &&
                                <> 
                                    <p>Add Task</p>
                                    <AddCircleOutlineIcon
                                        sx={{ color: '#D6B656', fontSize: '3rem', cursor: 'pointer'}}
                                        onClick={addTaskHandler}
                                    />
                                </>
                            }
                        </Grid>
                    </Grid>

                    <Grid className={classes.tasksContainer} container justifyContent='center' item xs={10}>
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

                    <Grid className={classes.listFooter} container item xs={1}>
                        <Grid container direction='row' item justifyContent='flex-end' alignItems='center'>
                            {
                                _.isEmpty(tasksSelected) ? (
                                    <>
                                        <p>Delete List</p>
                                        <DeleteIcon 
                                            sx={{color: '#000000', fontSize: '3rem', cursor: 'pointer'}}
                                            onClick={deleteListHandler}
                                        />
                                    </>
                                ):(
                                    <div
                                        onClick={moveTaskHandler} 
                                        className={classes.moveSpiel}
                                    >
                                        <p>{`Move to '${listName}' list`}</p>
                                        <ArrowCircleRightIcon
                                            sx={{ color: '#D6B656', fontSize: '2rem', cursor: 'pointer'}}
                                        />
                                    </div>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <AddTaskModal 
                isOpen={isAddTaskOpen}
                setModalOpen={setAddTaskOpen}
                listName={listName}
            />
        </Grid>
    );
}

export default List;