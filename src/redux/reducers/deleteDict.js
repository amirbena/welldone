import { CATEGORIES } from '../../constants/localStorageKeys';
import { DELETE_CATEGORY } from '../action-types';

const deleteDict = {
    [DELETE_CATEGORY]: (state, action) => {
        let deletedCategories = [...state.categoriesData.categories];
        const { selectedId } = state;
        deletedCategories = deletedCategories.filter(category => category.id !== selectedId);
        localStorage.setItem(CATEGORIES, JSON.stringify(deletedCategories));
        return {
            ...state,
            categoriesData: {
                ...state.categoriesData,
                categories: deletedCategories,
            },
            selectedId: -1
        }
    }
}

export default deleteDict;