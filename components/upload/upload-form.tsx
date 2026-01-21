"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { generatePdfSummary } from "@/actions/upload-actions";
import { toast } from "sonner";

const schema = z.object({});

export default function UploadForm() {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast("uploaded successfully!");
    },
    onUploadError: () => {
      toast("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

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
    }

    // PDF Summary

    const summary = await generatePdfSummary(file);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
