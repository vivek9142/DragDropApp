import ActionTypes from "../action/action";

const imagelabelChange = (path,label='') => {
    return ({type:ActionTypes.IMAGE_LABEL_DATA_CHANGE,payload:{path,label}});
}

const saveData = async (data) => {
        
        var fileToLoad = data.image[0];
        await data.image.map(async (img)=> {
            let fileReader = new FileReader();
        fileReader.onload = await function(fileLoadedEvent) {
            let srcData  = fileLoadedEvent.target.result;
        
        img['base64']=srcData
        return img;
        };
        await fileReader.readAsDataURL(fileToLoad)
        });
        
        downloadjson(data)
}

const downloadjson = (exportObj, exportName='export') =>{
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

export {imagelabelChange,saveData};