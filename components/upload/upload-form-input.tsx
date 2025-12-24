import { Button } from "@/components/ui/button";

export default function UploadFormInput() {
  return (
    <form action="" className="flex flex-col gap-6">
      <input type="file" />
      <Button>Upload Your PDF</Button>
    </form>
  );
}
