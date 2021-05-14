import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { setDeleteDialogVisibilty, deleteSelectedCategory, setDeletePopupVisibilty } from '../../../redux/actions';


const DeleteDialog = () => {
    const { deleteDialogVisibilty } = useSelector(state => state.visibilties);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setDeleteDialogVisibilty(false));
        dispatch(setDeletePopupVisibilty(true));
    };

    const handleDelete = () => {
        dispatch(deleteSelectedCategory());
        handleClose();
    };

    return (
        <Dialog open={deleteDialogVisibilty} onClose={handleClose}>
            <DialogTitle>Show Category</DialogTitle>
            <DialogActions>
                <Button onClick={handleDelete} style={{ backgroundColor: "red" }}>
                    Delete
                </Button>
                <Button onClick={handleClose} autoFocus color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog;