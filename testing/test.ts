import { genarateDocument } from '../src/genarator/genaratorFun'
import path  from 'path';
import fs from 'fs'




const documentType = "image";
const templateType = "paymentInvoiceTemplate";
const data={name:"exmpaleData"}  
genarateDocument(documentType, templateType,data).then((bufferData) => {
    console.log(bufferData,'created');
    if(bufferData){
        const outputPath = path.join(__dirname, "..", "files", "any.pdf or any.jpg");
        fs.writeFile(outputPath,bufferData,(err)=>{
            if(err){
                console.log("error occured",err);
            }else{
                 console.log("file saved");
            }
        })  
    }
});
