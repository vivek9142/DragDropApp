import React from 'react';
import Input from '../../components/Input/Input.component';
import Button from '../../components/Button/Button.component';
import {useSelector} from 'react-redux';
import './LabelPage.styles.css';

const LabelPage = (props) => {
    const imageData = useSelector(state => state);
    console.log(imageData);

    
    return (
        <div className="labelpage__container">
            <h2 className='labelpage__heading'>Label Images</h2>
            <div className="labelpage__container--body">
                <div className="labelpage__container--input-container">
                    <Input type="text" name='label' labelText='Label' 
                        className='label_page--input-item--input' 
                        labelClass='label_page--input-item--label'
                        placeholder='Type Something!' required/>
                </div>
                <div className="labelpage__container--image-container">
                    <img src="https://images.unsplash.com/photo-1638438134319-68477408c19b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=268&q=80" 
                    alt="" className="labelpage__container--image" />
                </div>

                <div className="label__container--button--container">
                    <div className="label__container--button-pair">
                        {/* type='submit' */}
                        <Button  className='button__primary label_page--button'>Prev</Button>
                        <Button  className='button__primary label_page--button'>Next</Button>
                    </div>
                    <Button  className='button__primary label_page--button'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default LabelPage