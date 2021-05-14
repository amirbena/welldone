import { SELECT_ITEM, DESELECT_ITEM } from '../action-types'


export const changeDisablesValue = (state, destinationVal) => {
    return {
        ...state.enables,
        editDisabled: destinationVal,
        createDisabled: !destinationVal,
        viewDisabled: destinationVal,
        deleteDisabled: destinationVal
    }
}

const enablesDict = {
    [SELECT_ITEM]: (state, action) => {
        const { id } = action.payload;
        let newCategories = [...state.categoriesData.categories];
        let index = -1;
        newCategories = newCategories.map((category, i) => {
            if (category.id === id) index = i;
            return {...category, clicked: category.id === id}
        })
        return {
            ...state,
            categoriesData: {
                ...state.categoriesData,
                categories: newCategories
            },
            selectedId: id,
            enables: changeDisablesValue(state, false),
            categoryEdit: {
                ...state.categoryEdit,
                editText: newCategories[index].text
            }
        }
    },
    [DESELECT_ITEM]: (state, action) => {
        const newCategories = [...state.categoriesData.categories];
        const { selectedId } = state;
        const index = newCategories.findIndex(category => category.id === selectedId);
        newCategories[index].clicked = false;
        return {
            ...state,
            categoriesData: {
                ...state.categoriesData,
                categories: newCategories
            },
            selectedId: -1,
            enables: changeDisablesValue(state, true),
            categoryEdit: {
                ...state.categoryEdit,
                editText: ""
            }
        }
    }
}

export default enablesDict;