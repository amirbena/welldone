import {
    DELETE_POPUP_VISIBILTY, CREATE_POPUP_VISIBILTY, EDIT_POPUP_VISIBILTY,
    DETAILS_POPUP_VISIBILTY, DELETE_DIALOG_VISIBILTY
} from '../action-types';


const visibiltiesDict = {
    [CREATE_POPUP_VISIBILTY]: (state, action) => {
        const { destVisibility: createPopupVisibilty } = action.payload;
        return {
            ...state,
            visibilties: {
                ...state.visibilties,
                createPopupVisibilty
            }
        }
    },
    [EDIT_POPUP_VISIBILTY]: (state, action) => {
        const { destVisibility: editPopupVisibilty } = action.payload;
        return {
            ...state,
            visibilties: {
                ...state.visibilties,
                editPopupVisibilty
            }
        }
    },
    [DETAILS_POPUP_VISIBILTY]: (state, action) => {
        const { destVisibility: detailsPopupVisibilty } = action.payload;
        return {
            ...state,
            visibilties: {
                ...state.visibilties,
                detailsPopupVisibilty
            }
        }
    },
    [DELETE_POPUP_VISIBILTY]: (state, action) => {
        const { destVisibility: deletePopupVisibilty } = action.payload;
        return {
            ...state,
            visibilties: {
                ...state.visibilties,
                deletePopupVisibilty
            }
        }
    },
    [DELETE_DIALOG_VISIBILTY]: (state, action) => {
        const { destVisibility: deleteDialogVisibilty } = action.payload;
        return {
            ...state,
            visibilties: {
                ...state.visibilties,
                deleteDialogVisibilty
            }
        }
    }
}

export default visibiltiesDict;