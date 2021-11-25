import React from 'react';
import {makeStyles} from '@mui/styles/'
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmptyTaskBoardSpiel from '../components/EmptyTaskBoardSpiel';
import AddListTemplate from '../components/AddListTemplate';

const useStyles = makeStyles({
    rootGrid: ({mobile}) => ({
        background: '#3B3B3B',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: mobile ? 'flex-start':'center'
    }),
    dockedContainer: ({mobile}) => ({
        background: '#4D4D4D',
        height: mobile ? '50px':'100vh',
        width: mobile ? '100vw':'auto',
        borderRight: mobile ? '':'solid 2px #2E2E2E',
        borderBottom: mobile ? 'solid 2px #2E2E2E' : '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    taskBoardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});

const TaskBoardPage = () => {
    const mobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles({mobile});
    //fetch all lists on mount
    return (
        <Grid className={classes.rootGrid} container direction={mobile ? 'column' : 'row'}>
            <Grid className={classes.dockedContainer} xs={2} sm={3} item >
                {!mobile && <AddListTemplate/>}
            </Grid>
            <Grid className={classes.taskBoardContainer} xs={10} sm={9} item>
                <EmptyTaskBoardSpiel/>
            </Grid>
        </Grid>
    )
}

export default TaskBoardPage;