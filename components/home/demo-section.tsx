import { Pizza } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Pizza Icon */}
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gray-300/20 backdrop-blur-xs border border-gray-500/30 mb-4">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          {/* Summary */}
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              Watch how you can easily get a{" "}
              <span className="text-rose-500">summary</span> of your PDF in
              seconds
            </h3>
          </div>
          {/* Summary */}
          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
          </div>
        </div>
      </div>
    </section>
  );
}
