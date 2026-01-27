'use server';
import { fetchandExtractPdfText } from "@/lib/langChain";

interface ServerData {
  userId: string;
  file: {
    url: string;
    name: string;
  };
}

interface PdfSummaryResponse {
  success: boolean;
  message: string;
  data: string | null;
}

/**
 * Generates a summary of a PDF file from uploaded data
 */
export async function generatePdfSummary(uploadResponse: ServerData[] | null | undefined): Promise<PdfSummaryResponse> {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: "No file uploaded",
      data: null,
    };
  }

  // Only take the first uploaded file (can be extended to multiple later)
  const firstFile = uploadResponse[0];

  if (!firstFile?.userId || !firstFile.file?.url || !firstFile.file?.name) {
    return {
      success: false,
      message: "Invalid file uploaded",
      data: null,
    };
  }

  try {
    const pdfText = await fetchandExtractPdfText(firstFile.file.url);

    return {
      success: true,
      message: "PDF summary generated successfully",
      data: pdfText,
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message: errorMessage,
      data: null,
    };
  }
}
