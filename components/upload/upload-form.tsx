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

const schema = z.object({});

export default function UploadForm() {
  // Upload to uploadthing
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast("uploaded successfully!");
    },
    onUploadError: () => {
      toast("error occurred while uploading");
    },
    onUploadBegin: (fileName) => {
      console.log("upload has begun for", fileName);
    },
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    console.log(file);

    const validateFields = schema.safeParse({ file });

    if (!validateFields.success) {
      toast.error(validateFields.error.message);
      return;
    }

    toast("uploading...");

    const response = await startUpload([file]);

    if (response) {
      console.log(response);
    } else {
      console.log("something went wrong");
      return;
    }

    // Sending Response to LangChain

    const serverData: ServerData[] = response.map((item) => ({
      userId: item.serverData.userId, // ✅ FIX
      file: {
        url: item.serverData.fileUrl,
        name: item.serverData.fileName,
      },
    }));

    const summary = await generatePdfSummary(serverData);

    console.log(summary);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
