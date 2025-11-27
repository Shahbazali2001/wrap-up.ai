import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="">
        <div className="flex items-center justify-center">
          <div className="relative p-0.5 overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
            >
              <Sparkles className="h-6 w-6 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered by AI</p>
            </Badge>
          </div>
        </div>

        <h1 className="font-bold py-6 text-center">
          Transform PDFs into Powerful{" "}
          <span className="text-rose-500">Summaries</span> that Speaks Out
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 text-gray-600">
          Get a summary of your PDF in seconds
        </h2>
        <div className="flex items-center justify-center py-6">
          <Button
            variant={"link"}
            className="text-white mt-4 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-12 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <Link href="#/pricing" className="flex gap-2 items-center">
              <span className="">Get Started</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
