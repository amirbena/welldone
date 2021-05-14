import { CATEGORIES } from '../../constants/localStorageKeys';
import { DELETE_CATEGORY } from '../action-types';
import { changeDisablesValue } from './enableDict';


const deleteDict = {
    [DELETE_CATEGORY]: (state, action) => {
        let deletedCategories = [...state.categoriesData.categories];
        const { selectedId } = state;
        deletedCategories = deletedCategories.filter(category => category.id !== selectedId);
        localStorage.setItem(CATEGORIES, JSON.stringify(deletedCategories));
        return {
            ...state,
            selectedId: -1,
            enables: changeDisablesValue(state, true),
            categoriesData: {
                ...state.categoriesData,
                categories: deletedCategories,
            },
            
        }
    }
}

export default deleteDict;