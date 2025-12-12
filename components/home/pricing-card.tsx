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
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>

      <div>
        <p>{price}</p>
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
  );
}
