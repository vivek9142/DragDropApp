import React from 'react';
import Input from '../../components/Input/Input.component';
import { useState } from 'react';
import Button from '../../components/Button/Button.component';
import {useSelector,useDispatch} from 'react-redux';
import {imagelabelChange} from '../../redux/actionCreator/labelActionCr';

import './LabelPage.styles.css';

const LabelPage = (props) => {

    const imageData = useSelector(state => state);
    const dispatch = useDispatch();
    const imgLength = imageData.image.length;
    
    const [img,setImg] = useState(0);
    const [label,setLabel] = useState('');


    const PrevButtonHandler = () => {
        
        if(img>0)
        setImg((img)=> { let i=img; i--; return i;})

        setLabel()
    }

    const NextButtonHandler = (path,label) => {
        
        if(img<imgLength-1)
        setImg((img)=> {let i=img; i++; return i;})

        dispatch(imagelabelChange(path,label));

        setLabel('');
    }
    return (
        <div className="labelpage__container">
            <h2 className='labelpage__heading'>Label Images</h2>
            <div className="labelpage__container--body">
                <div className="labelpage__container--input-container">
                    <Input type="text" name='label' labelText='Label' 
                        className='label_page--input-item--input' 
                        labelClass='label_page--input-item--label'
                        placeholder='Type Something!' onChange={(ev)=>setLabel(ev.target.value)} value={imageData.image[img].label?imageData.image[img].label:label} required/>
                </div>
                <div className="labelpage__container--image-container">
                    <img src={imageData.image[img].preview} 
                    alt="" className="labelpage__container--image" />
                </div>

                <div className="label__container--button--container">
                    <div className="label__container--button-pair">
                        {/* type='submit' */}

                            <Button  className={`button__primary label_page--button ${img===0 || imgLength===1 ? 'button--disabled' : ''}`} 
                            onClick={() => PrevButtonHandler(imageData.image[img].path,label)} 
                            disabled={img===0 || imgLength===1 ? 'disabled' : ''}>
                                Prev
                            </Button>

                            <Button  className={`button__primary label_page--button ${img===imgLength-1 || imgLength===1 ? 'button--disabled' : ''}`}
                            onClick={() => NextButtonHandler(imageData.image[img].path,label)} disabled={img>=imgLength || imgLength===1 ? 'disabled' : ''}>
                                Next
                            </Button>
                    </div>
                    <Button  className='button__primary label_page--button'>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default LabelPage