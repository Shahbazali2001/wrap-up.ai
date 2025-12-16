import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gray-50">
      <div className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div>
          <h2 className="font-bold text-4xl py-6 mt-4 text-center">
            Ready to Save <span className="text-rose-500">Hours</span> of
            Reading Time?
          </h2>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 text-gray-600">
            Turn complexity into clear summaries
          </h2>
          <div className="flex items-center justify-center py-4">
            <Button
              variant={"link"}
              className="text-white mt-4 text-base sm:text-lg lg:text-xl rounded-xl px-6 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-12 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              <Link href="#/pricing" className="flex gap-2 items-center">
                <span className="">Get Started</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
