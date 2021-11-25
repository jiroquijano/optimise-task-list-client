import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    emptyTaskboardSpiel: {
        fontFamily: 'Helvetica',
        color: '#FFFFFF',
        fontSize: '2rem',
        whiteSpace: 'pre-line'
    }
});
const EmptyTaskBoardSpiel = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.emptyTaskboardSpiel}>{`Task board is empty\ncreate a new List.`}</div>
        </>
    )
}

export default EmptyTaskBoardSpiel;