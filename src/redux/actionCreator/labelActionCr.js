import ActionTypes from "../action/action";

const imagelabelChange = (path,label='') => {
    return ({type:ActionTypes.IMAGE_LABEL_DATA_CHANGE,payload:{path,label}});
}

export {imagelabelChange};