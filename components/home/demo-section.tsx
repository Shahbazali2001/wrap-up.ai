import { Pizza } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Pizza className="w-6 h-6 text-rose-500" />
          <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            Watch how you can easily get a{" "}
            <span className="text-rose-500">summary</span> of your PDF in
            seconds
          </h3>
        </div>
      </div>
    </section>
  );
}
