"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
  return (
    <form action="" onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="flex justify-end items-center gap-1.5">
        <Input
          className=""
          type="file"
          id="file"
          name="file"
          accept="application/pdf"
          required
        />
        <Button>Upload Your PDF</Button>
      </div>
    </form>
  );
}
