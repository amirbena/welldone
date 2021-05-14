import { CATEGORIES } from '../../constants/localStorageKeys';
import { EDIT_CATEGORY, CHANGE_TEXT_EDIT, CHANGE_EDIT_BAR_VISIBILTY } from '../action-types';
import { changeDisablesValue } from './enableDict';


const editDict = {
    [CHANGE_EDIT_BAR_VISIBILTY]: (state, action) => {
        const { destVisibility: editVisible } = action.payload;
        return {
            ...state,
            categoryEdit: {
                editText: editVisible? state.categoryEdit.editText :"",
                editVisible
            }
        }
    },
    [EDIT_CATEGORY]: (state, action) => {
        const editedCategories = [...state.categoriesData.categories];
        const indexFound = editedCategories.findIndex(category => category.id === state.selectedId);
        editedCategories[indexFound].text = state.categoryEdit.editText;
        editedCategories[indexFound].clicked = false;
        localStorage.setItem(CATEGORIES, JSON.stringify(editedCategories));
        return {
            ...state,
            categoriesData: {
                ...state.categoriesData,
                categories: editedCategories
            },
            selectedId: -1,
            enables: changeDisablesValue(state, true),
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