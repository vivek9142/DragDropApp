import React from 'react';
import Button from '../../components/Button/Button.component';
import DragDrop from '../../components/DragDrop/DragDrop.component';
import Input from '../../components/Input/Input.component';
import { useDispatch } from 'react-redux';
import {projectDataSubmit} from '../../redux/actionCreator/formActionCr';
import './CreateProject.styles.css';

const CreateProject = (props) => {
    const dispatch = useDispatch();

    const initialstate = {name:'',description:'',image:[]};
    const [formValues,setFormValues] = React.useState(initialstate);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(projectDataSubmit(formValues));
        props.history.push('/label-images');
    }
    const FileSubmitHandler = (data) => {
        window.alert('File Submitted successfully!')
        setFormValues({...formValues,image:data});
    }
    const ChangeHandler = (key,event) => {
        const data = {...formValues};
        data[key] = event.target.value;
        setFormValues(data);
    }
    return(
        <form onSubmit={submitHandler}>
        <div className="create_project--container">
            <div className="create_project--sub-item">
                <DragDrop onFileSubmit={FileSubmitHandler}/>
            </div>

            <div className="create_project--sub-item">
                <div className="create_project--input-item">
                    <Input type="text" name='name' labelText='Name' 
                    className='create_project--input-item--input' 
                    labelClass='create_project--input-item--label'
                    onChange={(event)=> ChangeHandler('name',event)}
                    placeholder='Type Something!'/>
                </div>

                <div className="create_project--input-item">
                    <Input type='textarea' name='description' labelClass='create_project--input-item--label'
                    className='create_project--input-item--input' onChange={(event)=> ChangeHandler('description',event)}
                    labelText='Description'  placeholder='Type Something!' />
                </div>
            </div>

            <div className="create_project--sub-item create_project--button-container">
                    <Button type='submit' className='button__primary create_project--button'>Create</Button>
            </div>
        </div>
        </form>
    )
}

export default CreateProject;