import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, Grid, DialogActions, Button, TextField } from '@material-ui/core';
import { changeEditBarVisibiltity, changeEditText, editCategoryAction, setEditPopupVisibilty } from '../../../redux/actions'


const EditCategory = () => {
    const { editVisible, editText } = useSelector(state => state.categoryEdit);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(changeEditBarVisibiltity(false));


    const onEditText = e => {
        e.preventDefault();
        const { value: text } = e.target;
        dispatch(changeEditText(text));
    }

    const editCategory = () => {
        dispatch(editCategoryAction());
        dispatch(setEditPopupVisibilty(true));
    }

    return (
        <Dialog open={editVisible}>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogContent>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <h3>Category Name</h3>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Category Name" value={editText} onChange={onEditText} variant="filled" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={editCategory} color="primary">
                    Edit
                    </Button>
                <Button onClick={handleClose} autoFocus color="secondary">
                    Cancel
                    </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditCategory;