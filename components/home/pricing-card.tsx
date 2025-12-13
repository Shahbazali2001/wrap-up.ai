import { cn } from "@/lib/utils";
import { Plan } from "@/misc/plans";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
export default function PricingCard({
  name,
  paymentId,
  description,
  price,
  items,
}: Plan) {
  return (
    <div className="relative w-full max-w-lg">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-2 border-gray-700/20 rounded-xl",
          name === "Pro" && " border-rose-500 border-2"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div>
            <p className="text-xs">USD / month</p>
          </div>
        </div>

        <div className="space-y-2.5 leading-relaxed text-base flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-rose-500" />
              <span>{item}</span>
            </li>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Button
            variant={"link"}
            className="text-white mt-4 text-base sm:text-lg lg:text-xl rounded-full w-full px-6 sm:px-10 lg:px-12 py-6 sm:py-6 lg:py-7 lg:mt-12 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <Link
              href={`/${paymentId}`}
              className="flex flex-row justify-center items-center"
            >
              Buy Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
