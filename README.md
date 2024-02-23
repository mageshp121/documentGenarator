Document Generator
Document Generator is a Node.js module that allows you to generate PDF,  and image documents from templates using Puppeteer and docxtemplater.

Installation
Copy code
npm install
Usage
javascript
Copy code
const DocumentGenerator = require('./DocumentGenerator');

// Initialize the Document Generator
const generator = new DocumentGenerator();
await generator.initialize();

// Generate a PDF document
const pdfBuffer = await generator.generatePDF(data, templateType);


// Generate an image
const imageBuffer = await generator.generateImage(data, templateType);

// Close the generator
await generator.close();
Methods
initialize()
Initializes the document generator by launching Puppeteer.

generatePDF(data: Record<string, any>, templateType: string): Promise<Buffer>
Generates a PDF document from the provided data and template type.

generateDOCX(data: Record<string, any>, templateType: string): Promise<Buffer>
Generates a DOCX document from the provided data and template type.

generateImage(data: Record<string, any>, templateType: string): Promise<Buffer>
Generates an image from the provided data and template type.

close()
Closes the document generator, shutting down Puppeteer.



