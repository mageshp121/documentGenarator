"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genaratorClass_1 = __importDefault(require("./genaratorClass"));
function example(documentType, templateType) {
    return __awaiter(this, void 0, void 0, function* () {
        const documentGenerator = new genaratorClass_1.default();
        yield documentGenerator.initialize();
        try {
            if (documentType === 'pdf') {
                const pdfBuffer = yield documentGenerator.generatePDF(templateType);
                console.log('PDF generated successfully for', templateType);
                console.log(pdfBuffer, "pdfbuffer");
            }
            else if (documentType === 'image') {
                const imageBuffer = yield documentGenerator.generateImage(templateType);
                console.log('Image generated successfully for', templateType);
                console.log(imageBuffer, "imageBuffer");
            }
            else {
                throw new Error('Unsupported document type.');
            }
        }
        catch (error) {
            console.error('Error generating document:', error);
        }
        finally {
            yield documentGenerator.close();
        }
    });
}
// Example usage
const documentType = 'pdf'; // or 'image'
// const data = invoiceData; // or invitationData
const templateType = 'paymentInvoiceTemplate'; // or 'invitation'
example(documentType, templateType);
