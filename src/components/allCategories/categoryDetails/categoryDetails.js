import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, Grid, DialogActions, Button, TextField } from '@material-ui/core';
import { setDetailsPopupVisibilty } from '../../../redux/actions';


const ShowCategory = () => {
    const { editText, detailsPopupVisibilty } = useSelector(state => {
        return {
            editText: state.categoryEdit.editText,
            detailsPopupVisibilty: state.visibilties.detailsPopupVisibilty
        }
    });
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setDetailsPopupVisibilty(false));


    return (
        <Dialog open={detailsPopupVisibilty} onClose={handleClose}>
            <DialogTitle>Show Category</DialogTitle>
            <DialogContent>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <h2>Category Name</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Category Name" disabled value={editText} variant="filled" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus style={{ backgroundColor: "red" }}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ShowCategory;