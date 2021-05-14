const initialState = {
    categoriesData: {
        categories: [],
        id: 0
    },
    selectedId: -1,
    enables: {
        editDisabled: true,
        createDisabled: false,
        viewDisabled: true,
        deleteDisabled: true
    },
    visibilties: {
        createPopupVisibilty: false,
        editPopupVisibilty: false,
        detailsPopupVisibilty: false,
        deletePopupVisibilty: false,
        deleteDialogVisibilty: false
    },
    categoryCreate: {
        createText: ""
    },
    categoryEdit: {
        editText: "",
        editVisible: false
    }


}

export default initialState;