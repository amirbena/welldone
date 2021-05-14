import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, unselectItem } from '../../../redux/actions'

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const Category = ({ category }) => {
    const selectedId = useSelector(state => state.selectedId);
    const dispatch = useDispatch();

    const chooseRow = () => {
        dispatch(!category.clicked ? selectItem(category.id) : unselectItem());
    }

    return (
        <StyledTableRow onClick={chooseRow} selected={selectedId === category.id}>
            <StyledTableCell>
                {category.text}
            </StyledTableCell>
        </StyledTableRow>
    );

}

export default Category;