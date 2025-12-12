import PricingCard from "./pricing-card";
import plans from "@/misc/plans";

export default function PricingSection() {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        {/* Heading */}
        <div>
          <h2>Pricing </h2>
        </div>

        {/* Pricing Cards */}
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8 mt-4">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
