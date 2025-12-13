import { cn } from "@/lib/utils";
import { Plan } from "@/misc/plans";
import { Check, CheckCheckIcon } from "lucide-react";
import Link from "next/link";
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

        <div>
          <Link href={`/${paymentId}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
}
