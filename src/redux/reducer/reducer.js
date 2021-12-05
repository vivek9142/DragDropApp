import ActionTypes from '../action/action';
const initialState = {
    name:'',
    description:'',
    image:[]
}
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case ActionTypes.FILE_SUBMIT_SUCCESS:
            return {
                ...state,
                image:action.payload
            }
        case ActionTypes.PROJECT_DATA_SUBMITTED:
            return {
                ...state,
                name:action.payload.name,
                description:action.payload.description,
                image:action.payload.image
            }
        // case ActionTypes.IMAGE_LABEL_DATA_CHANGE:
        //     return {
        //         ...state,

        //     }
        default:
            return state;
    }
}

export default reducer;