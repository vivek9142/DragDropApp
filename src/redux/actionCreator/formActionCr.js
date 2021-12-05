import ActionTypes from "../action/action";

const projectDataSubmit = (data) => {
    return ({type:ActionTypes.PROJECT_DATA_SUBMITTED,payload:data});
}

export {projectDataSubmit};