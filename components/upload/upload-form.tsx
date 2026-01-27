"use client";

import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { generatePdfSummary } from "@/actions/upload-actions";
import { toast } from "sonner";

interface ServerData {
  userId: string;
  file: {
    url: string;
    name: string;
  };
}

interface UploadThingFile {
  ufsUrl: string;
  name: string;
  size?: number;
  key?: string;
  type?: string;
}

interface UploadResponseItem {
  serverData: {
    userId: string;
    fileUrl: string;
    fileName: string;
  };
}

const schema = z.object({
  file: z.instanceof(File, "Please select a valid file"),
});

export default function UploadForm() {
  // UploadThing hook
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast("Uploaded successfully!");
    },
    onUploadError: () => {
      toast.error("Error occurred while uploading");
    },
    onUploadBegin: (fileName) => {
      console.log("Upload has begun for", fileName);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File | null;

    // Validate file
    const validate = schema.safeParse({ file });
    if (!validate.success || !file) {
      toast.error(validate.success ? "File not found" : validate.error.message);
      return;
    }

    toast("Uploading...");

    try {
      // startUpload expects an array of files
      const response: UploadResponseItem[] | null = await startUpload([file]);

      if (!response || response.length === 0) {
        toast.error("Something went wrong with the upload");
        return;
      }

      // Map the response to ServerData
      const serverData: ServerData[] = response.map((item) => ({
        userId: item.serverData.userId,
        file: {
          url: item.serverData.fileUrl,
          name: item.serverData.fileName,
        },
      }));

      console.log("Server Data:", serverData);

      // Generate PDF summary
      const summary = await generatePdfSummary(serverData);
      console.log("Summary:", summary);

      toast.success("PDF summary generated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
