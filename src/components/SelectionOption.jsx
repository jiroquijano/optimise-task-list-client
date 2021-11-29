import React, {useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import taskBoardService from '../services/taskBoardService';
import TaskBoardContext from '../context/TaskBoardContext';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 'auto',
        width: '80%',
        background: '#4D4D4D',
        border: 'dashed 2px #D6B656',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    rootGrid: {
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap'
    },
    optionContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

const SelectionOption = () => {
    const classes = useStyles();
    const {taskBoardDispatch} = useContext(TaskBoardContext);

    const handleDeselect = () => {
        taskBoardDispatch({
            type: 'CLEAR_TASKS_SELECTED'
        });
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.rootGrid} container direction={'column'}>
                <Grid className={classes.optionContainer} item>
                    <Button
                        variant='contained'
                        style={{background: '#D6B656', width: '100%', margin: '5px'}}
                    >
                        Delete Selected Tasks
                    </Button>
                </Grid>
                <Grid className={classes.optionContainer} item>
                    <Button
                        variant='contained'
                        style={{background: '#D6B656', width: '100%', margin: '5px'}}
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