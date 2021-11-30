import React, {useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import taskBoardService from '../services/taskBoardService';
import TaskBoardContext from '../context/TaskBoardContext';
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles({
    root: ({mobile})=>({
        display: 'flex',
        height: 'auto',
        width: '80%',
        //background: mobile ? 'none':'#4D4D4D',
        border: mobile ? 'none':'dashed 2px #D6B656',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: mobile ? 'flex-end':'center',
        padding: mobile ? 'none':'20px'
    }),
    rootGrid: ({mobile})=>({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: mobile ? 'flex-end' : 'center'
    }),
    optionContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const SelectionOption = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles({mobile});
    const {taskBoardDispatch, tasksSelected} = useContext(TaskBoardContext);

    const handleDeselect = () => {
        taskBoardDispatch({
            type: 'CLEAR_TASKS_SELECTED'
        });
    }

    const handleDeleteAll = async () => {
        const {data} = await taskBoardService.deleteMultipleTasks(tasksSelected);
        taskBoardDispatch({
            type: 'CLEAR_TASKS_SELECTED'
        });
        taskBoardDispatch({
            type: 'UPDATE_LISTS',
            updatedLists: data.listsUpdated
        });
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.rootGrid} container direction={mobile ? 'row':'column'}>
                <Grid className={classes.optionContainer} item>
                    <Button
                        variant='contained'
                        style={{background: '#D6B656', width: '100%', margin: mobile ? '2px':'5px'}}
                        onClick={handleDeleteAll}
                    >
                        Delete Tasks
                    </Button>
                </Grid>
                <Grid className={classes.optionContainer} item>
                    <Button
                        variant='contained'
                        style={{background: '#D6B656', width: '100%', margin: mobile ? '2px':'5px'}}
                        onClick={handleDeselect}
                    >
                        Cancel Selection
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SelectionOption;