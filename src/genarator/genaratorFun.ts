import DocumentGenerator from "./genaratorClass";
import path = require("path");

export async function genarateDocument(documentType: string, templateType: string,data:Record<string,any>) {
  const documentGenerator = new DocumentGenerator();
  await documentGenerator.initialize();
  try {
    if (documentType === "pdf") {
      return await documentGenerator.generatePDF(data,templateType);
    } else if (documentType === "image") {
      return await documentGenerator.generateImage(data,templateType);
    } else {
      throw new Error("Unsupported document type.");
    }
  } catch (error) {
    console.error("Error generating document:", error);
  } finally {
    await documentGenerator.close();
  }
}






