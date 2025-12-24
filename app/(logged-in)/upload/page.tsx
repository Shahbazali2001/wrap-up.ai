import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BgGradient from "@/components/common/bg-gradient";

export default function UploadPage() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="relative p-0.5 overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="h-6 w-6 text-rose-600 animate-pulse" />
            <p className="text-base text-rose-600">AI powered Summaries</p>
          </Badge>
        </div>

        <div>
          <h1 className="font-bold py-6 mt-4 text-center">
            Start <span className="text-rose-500">Uploading</span> Your PDFs
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 text-gray-600">
            Upload your PDF and let our AI do the heavy lifting
          </h2>
        </div>
      </div>
    </section>
  );
}
