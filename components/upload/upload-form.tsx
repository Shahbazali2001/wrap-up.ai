"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";

const schema = z.object({});

export default function UploadForm() {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
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
      console.log(
        validateFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File",
      );
      return;
    }

    const response = await startUpload([file]);

    if (response) {
      console.log(response);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
