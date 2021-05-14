import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, Button, Snackbar } from '@material-ui/core';
import { changeCreationText, createCategoryAction, setCreatePopupVisibilty } from '../../redux/actions'
import { useHistory } from 'react-router';
import MuiAlert from '@material-ui/lab/Alert';


export function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const CreateCategory = () => {
    const dispatch = useDispatch();
    const { createText } = useSelector(state => state.categoryCreate);
    const history = useHistory();
    const { createPopupVisibilty } = useSelector(state => state.visibilties);

    const autoHideDuration = 4000;

    const handleClick = () => {
        dispatch(createCategoryAction());
        dispatch(setCreatePopupVisibilty(true));
        history.push("/");
    }

    const handleClose = () => {
        dispatch(setCreatePopupVisibilty(false));
    }
    const changeText = e => {
        const { value: text } = e.target;
        dispatch(changeCreationText(text));
    }

    return (
        <Grid container xs={12}>
            <Grid container justify="center">
                <h1>Add New Category</h1>
            </Grid>

            <Grid container justify="center" spacing={6}>
                <Grid item xs>
                    <h3>Category Name</h3>
                </Grid>
                <Grid item xs>
                    <TextField label="Category Name" value={createText} onChange={changeText} variant="outlined" />
                </Grid>
            </Grid>
            <Grid container style={{marginTop: "20px"}} justify="center">
                <Button variant="contained" color="primary" disabled={createText === ""} onClick={handleClick}>Add Category</Button>
            </Grid>

            <Snackbar open={createPopupVisibilty} autoHideDuration={autoHideDuration} >
                <Alert onClose={handleClose} severity="success">
                    Category Added Succesfully
                </Alert>
            </Snackbar>

        </Grid>
    )

}

export default CreateCategory;