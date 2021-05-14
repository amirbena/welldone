import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { setDeleteDialogVisibilty, deleteSelectedCategory, setDeletePopupVisibilty } from '../../../redux/actions';


const DeleteDialog = () => {
    const { deleteDialogVisibilty } = useSelector(state => state.visibilties);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setDeleteDialogVisibilty(false))
    };

    const handleDelete = () => {
        dispatch(deleteSelectedCategory());
        handleClose();
        dispatch(setDeletePopupVisibilty(true));
    };

    return (
        <Dialog open={deleteDialogVisibilty} onClose={handleClose}>
            <DialogTitle>Are you sure to delete?</DialogTitle>
            <DialogActions>
                <Button onClick={handleDelete} color="secondary">
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