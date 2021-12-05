import React from "react";
import { useDropzone } from "react-dropzone";
import "./DragDrop.styles.css";
import {ReactComponent as File} from '../../assets/svg/file.svg';
import { fileSubmit } from "../../redux/actionCreator/formActionCr";
import {useDispatch} from 'react-redux';

const DragDrop = (props) => {

  // props.onSubmit
  // const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
        props.onFileSubmit(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        ));
    }
  });

    return (
        <div className="DragDrop">
            <div className='DragDrop--Component' {...getRootProps()}>
            <input {...getInputProps()} />
            <File className='DragDrop--Component-icon'/>
            <p>Drop Files Here</p>
        </div>
        {/* <div>{images}</div> */}
        </div>
    )
}

export default DragDrop;