import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Grid, Button, Snackbar } from '@material-ui/core';
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
    }

    const handleClose = () => {
        dispatch(setCreatePopupVisibilty(false));
        history.push("/");
    }
    const changeText = e => {
        e.preventDefault();
        const { value: text } = e.target;
        dispatch(changeCreationText(text));
    }
    return (
        <Container>
            <h1>Add New Category</h1>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <h2>Category Name</h2>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Category Name" value={createText} onChange={changeText} variant="filled" />
                </Grid>
                <Button color="primary" onClick={handleClick}>Add Category</Button>

            </Grid>
            <Snackbar open={createPopupVisibilty} autoHideDuration={autoHideDuration} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Category Added Succesfully
                </Alert>
            </Snackbar>

        </Container>
    )

}

export default CreateCategory;