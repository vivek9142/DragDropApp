import ActionTypes from "../action/action";

const imagelabelChange = (path,label='') => {
    return ({type:ActionTypes.IMAGE_LABEL_DATA_CHANGE,payload:{path,label}});
}

const saveData = async (data) => {
        //converting img file to base64 data
        await data.image.map(async (img)=> {
            let fileReader = new FileReader();
         fileReader.onload = async function(fileLoadedEvent) {
            let srcData  = await fileLoadedEvent.target.result;
        
        img['base64']=srcData;
        return img;
        };
        await fileReader.readAsDataURL(img)
        });
        const newData = data;

        //alerting user to wait while file downloads
         window.alert('please wait for file to download');

        //timeout to makesure all data is received successfully inc base64
        setTimeout(async()=>{
            let dataStr = "data:text/json;charset=utf-8," + JSON.stringify(newData,0,2);
    
            let downloadAnchorNode = await document.createElement('a');

            await downloadAnchorNode.setAttribute("href",     dataStr);
            await downloadAnchorNode.setAttribute("download", "export.json");

            await document.body.appendChild(downloadAnchorNode);
            await downloadAnchorNode.click();
            await downloadAnchorNode.remove();
        },3000);
    
        
}

export {imagelabelChange,saveData};