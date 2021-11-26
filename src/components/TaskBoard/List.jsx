import React from 'react';
import Task from './Task';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

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
        fontFamily: 'Avenir',
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
        overflow: 'scroll'
    },
    listFooter:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

const List = ({listName, tasks, id}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <div className={classes.taskListRoot}>
                <Grid className={classes.listGridRoot} container direction='column'>

                    <Grid container item xs={1}>
                        <Grid className={classes.listHeaderName} item xs={9}>
                            {listName}
                        </Grid>
                        <Grid className={classes.listHeaderAddIconContainer} item xs={3}>
                            <AddCircleOutlineIcon sx={{ color: '#000000', fontSize: '3rem', cursor: 'pointer'}}/>
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
                        <Grid item>
                            <DeleteIcon 
                                sx={{color: '#000000', fontSize: '3rem', cursor: 'pointer'}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default List;