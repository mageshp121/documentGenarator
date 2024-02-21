import ejs from 'ejs';
import puppeteer from 'puppeteer';
import path from 'path'

class DocumentGenerator {
    private browser: any
    constructor() {
        this.browser = null;
    }
    public async initialize(): Promise<void> {
        this.browser = await puppeteer.launch();
    }
    // public async generatePDF(data: Record<string, any>, templateType: string): Promise<Buffer> {
    //     const htmlContent = await this.renderTemplate(templateType, data);
    //     return this.generateDocument(htmlContent, 'pdf');
    // }
    public async generatePDF( templateType: string): Promise<Buffer> {
        const htmlContent = await this.renderTemplate(templateType);
        return this.generateDocument(htmlContent, 'pdf');
    }
    
    // public async generateImage(data: Record<string, any>, templateType: string): Promise<Buffer> {
    //     const htmlContent = await this.renderTemplate(templateType,data);
    //     return this.generateDocument(htmlContent, 'image');
    // }
        
    public async generateImage( templateType: string): Promise<Buffer> {
        const htmlContent = await this.renderTemplate(templateType);
        return this.generateDocument(htmlContent, 'image');
    }

    // private async renderTemplate(templateType: string, data: Record<string, any>): Promise<string> {
    //     const templatePath = `templates/${templateType}.ejs`;
    //     return await ejs.renderFile(templatePath, { data });
    // }
    private async renderTemplate(templateType: string): Promise<string> {
        const templatePath = path.join(__dirname, '..','templates', `${templateType}.ejs`);
        return await ejs.renderFile(templatePath);
    }
    private async generateDocument(htmlContent: string, documentType: string): Promise<Buffer> {
        if (!this.browser) {
            throw new Error('Browser is not initialized.');
        }
        const page = await this.browser.newPage();
        await page.setContent(htmlContent);
        let buffer: Buffer;
        if (documentType === 'pdf') {
            buffer = await page.pdf({ format: 'A4' });
        } else if (documentType === 'image') {
            buffer = await page.screenshot();
        } else {
            throw new Error('Unsupported document type.');
        }
        await page.close();
        return buffer;
    }
    public async close(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

export default DocumentGenerator;
