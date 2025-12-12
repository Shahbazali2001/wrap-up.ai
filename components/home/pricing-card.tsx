import { Plan } from "@/misc/plans";
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
      <div className="relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-2 border-gray-500/20 rounded-xl">
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>

        <div>
          <p>$ {price}</p>
        </div>

        <div>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>

        <div>
          <Link href={`/${paymentId}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
}
