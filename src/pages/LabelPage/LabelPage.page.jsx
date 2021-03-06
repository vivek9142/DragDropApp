import React from 'react';
import Input from '../../components/Input/Input.component';
import { useState } from 'react';
import Button from '../../components/Button/Button.component';
import {useSelector,useDispatch} from 'react-redux';
import { imagelabelChange, saveData} from '../../redux/actionCreator/labelActionCr';

import './LabelPage.styles.css';

const LabelPage = (props) => {

    const imageData = useSelector(state => state);
    const dispatch = useDispatch();
    const imgLength = imageData.image.length;
    
    const [img,setImg] = useState(0);
    const [label,setLabel] = useState('');


    const PrevButtonHandler = async () => {
        if(img>0)
        await setImg((img)=> { let i=img; i--; return i;})
    }

    const NextButtonHandler = async (path,label) => {
        if(img<imgLength){
            await dispatch(imagelabelChange(path,label));
            if(img<imgLength-1)
            await setImg((img)=> {let i=img; i++; return i;})
        
        if(img===imgLength-1) setLabel(imageData.image[img].label)
        else imageData.image[img+1]?.label? setLabel(imageData.image[img+1].label):setLabel('');
        }
    }

    const dataSaveHandler = async (event) => {
        event.preventDefault();
        console.log(imageData);
        await saveData(imageData);
    }
    return (
        <div className="labelpage__container">
            <form onSubmit={dataSaveHandler}>
            <h2 className='labelpage__heading'>Label Images</h2>
            <div className="labelpage__container--body">
                <div className="labelpage__container--input-container">

                    <Input type="text" name='label' labelText='Label' 
                        className='label_page--input-item--input' 
                        labelClass='label_page--input-item--label'
                        // imageData.image[img].label?imageData.image[img].label:
                        placeholder='Type Something!' onChange={(ev)=>setLabel(ev.target.value)} 
                        value={imageData.image[img].label?imageData.image[img].label:label} required
                        />
                </div>
                <div className="labelpage__container--image-container">
                    <img src={imageData.image[img].preview} 
                    alt="" className="labelpage__container--image" />
                </div>

                <div className="label__container--button--container">
                    <div className="label__container--button-pair">

                            <Button type="button" className={`button__primary label_page--button ${img===0 || imgLength===1 ? 'button--disabled' : ''}`} 
                            onClick={() => PrevButtonHandler(imageData.image[img].path,label)} 
                            disabled={img===0 || imgLength===1 ? 'disabled' : ''}>
                                Prev
                            </Button>

                            <Button type="button" className={`button__primary label_page--button ${img===imgLength-1 || imgLength===1 ? 'button--disabled' : ''}`}
                            onClick={() => NextButtonHandler(imageData.image[img].path,label)} disabled={img>=imgLength || imgLength===1 ? 'disabled' : ''}>
                                Next
                            </Button>
                    </div>
                    <Button  type='submit' className='button__primary label_page--button'>Save</Button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default LabelPage