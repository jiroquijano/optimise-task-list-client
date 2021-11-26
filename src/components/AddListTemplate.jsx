import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Input } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '20rem',
        width: '80%',
        background: '#4D4D4D',
        border: 'dashed 2px #00CCCC',
        borderRadius: '5px',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rootGrid: {
        width: '100%',
        display: 'flex'
    },
    inputContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10px'
    },
    addIconContainer: {
        display: 'flex',
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        paddingTop: '10vh'
    },
    inputStyle: {
        '&.underline': {
            borderBottom: `2px solid white`
        },
    }
});

const AddListTemplate = () => {
    const classes = useStyles();
    const [inputName, setInputName] = useState('');
    return (
        <div className={classes.root}>
            <Grid className={classes.rootGrid} container direction={'column'}>
                <Grid className={classes.inputContainer} xs={2} item>
                    <Input
                        placeholder='<New List Name>'
                        sx={{color: '#FFFFFF', width: '80%', textAlign: 'center'}}
                        value={inputName}
                        classes={{
                            root: classes.inputStyle,
                            underline: 'underline'
                        }}
                        onChange={(e)=>{
                            setInputName(e.target.value);
                        }}
                    />
                </Grid>
                <Grid className={classes.addIconContainer} xs={10} item>
                    <AddCircleOutlineIcon sx={{ color: '#00CCCC', fontSize: '5rem' }}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddListTemplate;