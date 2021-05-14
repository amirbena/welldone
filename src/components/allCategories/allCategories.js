import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Table, TableBody, Fab, TableContainer, Paper, TableHead, Snackbar } from '@material-ui/core';
import { Add as AddIcon, Edit as EditIcon, Info as InfoIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import {
    setDeletePopupVisibilty, changeEditBarVisibiltity,
    setDetailsPopupVisibilty, setDeleteDialogVisibilty, setEditPopupVisibilty,


} from '../../redux/actions';
import { Alert } from '../createCategory/createCategory';
import DeleteCategoryDialog from './deleteCategoryDialog/deleteCategoryDialog';
import CategoryDetails from './categoryDetails/categoryDetails';
import EditCategory from './editCategory/editCategory';
import Category, { StyledTableCell, StyledTableRow } from './category/category';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


const AllCategories = () => {
    const { categories, editPopupVisibilty, deletePopupVisibilty,
        editDisabled, createDisabled, viewDisabled, deleteDisabled } = useSelector(state => {
            const { categories } = state.categoriesData;
            return { categories, ...state.visibilties, ...state.enables };
        });

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    const openEditWindow = () => dispatch(changeEditBarVisibiltity(true));
    const openDetailsWindow = () => dispatch(setDetailsPopupVisibilty(true));
    const openDeleteDialog = () => dispatch(setDeleteDialogVisibilty(true));

    const handleCloseEditSuccessPopup = () => {
        dispatch(setEditPopupVisibilty(false));
    }

    const handleCloseDeleteSuccessPopup = () => {
        dispatch(setDeletePopupVisibilty(false));
    }
    const autoHideDuration = 4000;


    const ActionButtons = () => {
        return (
            <div className={classes.root}>
                <Fab color="primary" aria-label="add" disabled={createDisabled} size="small" onClick={() => history.push('/add-category')}>
                    <AddIcon />
                </Fab>
                <Fab color="primary" aria-label="edit" disabled={editDisabled} size="small" onClick={openEditWindow}>
                    <EditIcon />
                </Fab>
                <Fab color="primary" disabled={viewDisabled} size="small" onClick={openDetailsWindow}>
                    <InfoIcon />
                </Fab>
                <Fab color="secondary" disabled={deleteDisabled} size="small" onClick={openDeleteDialog}>
                    <DeleteIcon />
                </Fab>
            </div>
        );
    }

    return (
        <Grid container xs={10} justify="center">
            <Grid container justify="center">
                <h1>All Categories</h1>
            </Grid>
            <Grid container justify="flex-end">
                <ActionButtons />
            </Grid>

            <Grid container style={{marginLeft: "10px"}}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <StyledTableCell>
                                <StyledTableRow align="right"><h1>Category Name</h1></StyledTableRow>
                            </StyledTableCell>
                        </TableHead>
                        <TableBody>
                            {categories.map((category, index) => (
                                <Category key={"C" + index} category={category} />
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Grid>

            <DeleteCategoryDialog />
            <CategoryDetails />
            <EditCategory />
            <Snackbar open={editPopupVisibilty} autoHideDuration={autoHideDuration} onClose={handleCloseEditSuccessPopup}>
                <Alert onClose={handleCloseEditSuccessPopup} severity="success">
                    Category Edited Succesfully
                </Alert>
            </Snackbar>
            <Snackbar open={deletePopupVisibilty} autoHideDuration={autoHideDuration} onClose={handleCloseDeleteSuccessPopup}>
                <Alert onClose={handleCloseDeleteSuccessPopup} severity="success">
                    Category Deleted Succesfully
                </Alert>
            </Snackbar>
        </Grid>
    )


}

export default AllCategories;