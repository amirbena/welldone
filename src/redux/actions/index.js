import * as ActionTypes from '../action-types';


export const getCategoriesFromLocalStorage = () => {
    return {
        type: ActionTypes.GET_CATEGORIES_FROM_LOCAL_STORAGE,
        payload: {}
    }
}

export const createCategoryAction = () => {
    return {
        type: ActionTypes.CREATE_CATEGORY,
        payload: {}
    }
}

export const changeCreationText = text => {
    return {
        type: ActionTypes.CHANGE_TEXT_CREATE,
        payload: { text }
    }
}

export const deleteSelectedCategory = () => {
    return {
        type: ActionTypes.DELETE_CATEGORY,
        payload: {}
    }
}

export const changeEditBarVisibiltity = destVisibility => {
    return {
        type: ActionTypes.CHANGE_EDIT_BAR_VISIBILTY,
        payload: { destVisibility }
    }
}

export const editCategoryAction = () => {
    return {
        type: ActionTypes.EDIT_CATEGORY,
        payload: {}
    }
}

export const changeEditText = text => {
    return {
        type: ActionTypes.CHANGE_TEXT_EDIT,
        payload: { text }
    }
}

export const selectItem = id => {
    return {
        type: ActionTypes.SELECT_ITEM,
        payload: { id }
    }

}

export const setCreatePopupVisibilty = destVisibility => {
    return {
        type: ActionTypes.CREATE_POPUP_VISIBILTY,
        payload: { destVisibility }
    }
}

export const setEditPopupVisibilty = destVisibility => {
    return {
        type: ActionTypes.EDIT_POPUP_VISIBILTY,
        payload: { destVisibility }
    }
}

export const setDetailsPopupVisibilty = destVisibility => {
    return {
        type: ActionTypes.DETAILS_POPUP_VISIBILTY,
        payload: { destVisibility }
    }
}

export const setDeletePopupVisibilty = destVisibility => {
    return {
        type: ActionTypes.DELETE_POPUP_VISIBILTY,
        payload: { destVisibility }
    }
}

export const setDeleteDialogVisibilty = destVisibility => {
    return {
        type: ActionTypes.DELETE_DIALOG_VISIBILTY,
        payload: { destVisibility }
    }
}

export const unselectItem = () => {
    return {
        type: ActionTypes.DESELECT_ITEM,
        payload: {}
    }
}

