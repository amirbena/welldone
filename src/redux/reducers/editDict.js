import { CATEGORIES } from '../../constants/localStorageKeys';
import { EDIT_CATEGORY, CHANGE_TEXT_EDIT, CHANGE_EDIT_BAR_VISIBILTY } from '../action-types';


const editDict = {
    [CHANGE_EDIT_BAR_VISIBILTY]: (state, action) => {
        const { destVisibility: editVisible } = action.payload;
        return {
            ...state,
            categoryEdit: {
                ...state.categoryEdit,
                editVisible
            }
        }
    },
    [EDIT_CATEGORY]: (state, action) => {
        const editedCategories = [...state.categoriesData.categories];
        const indexFound = editedCategories.findIndex(category => category.id === state.selectedId);
        console.log(state.categoryEdit.editText);
        editedCategories[indexFound].text = state.categoryEdit.editText;
        localStorage.setItem(CATEGORIES, JSON.stringify(editedCategories));
        return {
            ...state,
            categoriesData: {
                ...state.categoriesData,
                categories: editedCategories
            },
            categoryEdit: {
                editText: "",
                editVisible: false
            }
        }
    },
    [CHANGE_TEXT_EDIT]: (state, action) => {
        const { text: editText } = action.payload;
        return {
            ...state,
            categoryEdit: {
                ...state.categoryEdit,
                editText
            }
        }
    }
}

export default editDict;