import { CATEGORIES } from '../../constants/localStorageKeys';
import { CREATE_CATEGORY, CHANGE_TEXT_CREATE, GET_CATEGORIES_FROM_LOCAL_STORAGE } from '../action-types';

const createAndGetDict = {
    [GET_CATEGORIES_FROM_LOCAL_STORAGE]: (state, action) => {
        const stringifiedCategories = localStorage.getItem(CATEGORIES);
        if (!stringifiedCategories) return state;
        const categories = JSON.parse(stringifiedCategories);
        return {
            ...state,
            categoriesData: {
                categories,
                id: categories.length
            }
        }
    },
    [CREATE_CATEGORY]: (state, action) => {
        const { id } = state.categoriesData;
        const { createText: text } = state.categoryCreate
        const category = {
            id,
            text,
            clicked: false
        }
        const categories = [...state.categoriesData.categories, category];
        localStorage.setItem(CATEGORIES,JSON.stringify(categories));
        return {
            ...state,
            categoriesData: {
                categories,
                id: id + 1,
            },
            categoryCreate: {
                createText: ""
            }
        }
    },
    [CHANGE_TEXT_CREATE]: (state, action) => {
        const { text: createText } = action.payload;
        return {
            ...state,
            categoryCreate: {
                createText
            }
        }
    }
}

export default createAndGetDict;