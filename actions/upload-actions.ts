'use server';
import { fetchandExtractPdfText } from "@/lib/langChain";

interface ServerData {
   userId: string;
    file : {
        url: string;
        name: string;
    }
}

export async function generatePdfSummary(uploadResponse: ServerData[]) {
    
    if (!uploadResponse) {
        return {
            success : false,
            message : "No file uploaded",
            data : null
        }
    }


    const { userId, file } = uploadResponse[0];
    const fileName = file.name;
    const pdfUrl = file.url;

    if (!userId || !fileName || !pdfUrl) {
        return {
            success : false,
            message : "Invalid file uploaded",
            data : null
        }
    }

    try{

        const pdfText = await fetchandExtractPdfText(pdfUrl);
        console.log(pdfText);
        return {
            success : true,
            message : "PDF summary generated successfully",
            data : pdfText
        }

    }catch(error : unknown){
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return {
            success : false,
            message : errorMessage,
            data : null
        }
    }


}