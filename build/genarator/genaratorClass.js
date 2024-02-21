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
const ejs_1 = __importDefault(require("ejs"));
const puppeteer_1 = __importDefault(require("puppeteer"));
class DocumentGenerator {
    constructor() {
        this.browser = null;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield puppeteer_1.default.launch();
        });
    }
    // public async generatePDF(data: Record<string, any>, templateType: string): Promise<Buffer> {
    //     const htmlContent = await this.renderTemplate(templateType, data);
    //     return this.generateDocument(htmlContent, 'pdf');
    // }
    generatePDF(templateType) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlContent = yield this.renderTemplate(templateType);
            return this.generateDocument(htmlContent, 'pdf');
        });
    }
    // public async generateImage(data: Record<string, any>, templateType: string): Promise<Buffer> {
    //     const htmlContent = await this.renderTemplate(templateType,data);
    //     return this.generateDocument(htmlContent, 'image');
    // }
    generateImage(templateType) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlContent = yield this.renderTemplate(templateType);
            return this.generateDocument(htmlContent, 'image');
        });
    }
    // private async renderTemplate(templateType: string, data: Record<string, any>): Promise<string> {
    //     const templatePath = `templates/${templateType}.ejs`;
    //     return await ejs.renderFile(templatePath, { data });
    // }
    renderTemplate(templateType) {
        return __awaiter(this, void 0, void 0, function* () {
            const templatePath = `views/templates/${templateType}.ejs`;
            return yield ejs_1.default.renderFile(templatePath);
        });
    }
    generateDocument(htmlContent, documentType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.browser) {
                throw new Error('Browser is not initialized.');
            }
            const page = yield this.browser.newPage();
            yield page.setContent(htmlContent);
            let buffer;
            if (documentType === 'pdf') {
                buffer = yield page.pdf({ format: 'A4' });
            }
            else if (documentType === 'image') {
                buffer = yield page.screenshot();
            }
            else {
                throw new Error('Unsupported document type.');
            }
            yield page.close();
            return buffer;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.browser) {
                yield this.browser.close();
            }
        });
    }
}
exports.default = DocumentGenerator;
