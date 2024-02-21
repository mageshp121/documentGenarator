import DocumentGenerator from "./genaratorClass";
import fs from "fs";
import path = require("path");

async function genarateDocument(documentType: string, templateType: string) {
  const documentGenerator = new DocumentGenerator();
  await documentGenerator.initialize();
  try {
    if (documentType === "pdf") {
      return await documentGenerator.generatePDF(templateType);
    } else if (documentType === "image") {
      return await documentGenerator.generateImage(templateType);
    } else {
      throw new Error("Unsupported document type.");
    }
  } catch (error) {
    console.error("Error generating document:", error);
  } finally {
    await documentGenerator.close();
  }
}

const documentType = "pdf";
const templateType = "paymentInvoiceTemplate";
genarateDocument(documentType, templateType).then((bufferData) => {
    if(bufferData){
        const outputPath = path.join(__dirname, "..", "files", "make.pdf");
        fs.writeFile(outputPath,bufferData,(err)=>{
            if(err){
                console.log("error occured",err);
            }else{
                 console.log("file saved");
            }
        })  
    }
});


