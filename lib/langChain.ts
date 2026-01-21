import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';



export async function fetchandExtractPdfText(fileUrl : string) {
        const response = await fetch(fileUrl);
        const blob = await response.blob();

        const arrayBuffer = await blob.arrayBuffer();

        const new_blob = new Blob([arrayBuffer]);
        const pdfLoader = new PDFLoader(new_blob);
        const docData = await pdfLoader.load();

        const text = docData.map((doc) => doc.pageContent).join(' \n');
        return text
}