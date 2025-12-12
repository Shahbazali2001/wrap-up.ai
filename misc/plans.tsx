interface Plan {
  id: number;
  name: string;
  paymentId?: string;
  description: string;
  price: number;
  items: string[];
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    paymentId: "price_1NjXj6J4b0w0w0w0w0w0w0w0",
    price: 9,
    description: "For Individuals and Students",
    items: [
      "5 PDF Summaries per month",
      "Compressed PDF Export",
      "Support via Email",
      "24/7 Customer Support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    paymentId: "price_2NjXj6J4b0w0w0w0w0w0w0w1",
    price: 19,
    description: "For Professionals and Teams",
    items: [
      "10 PDF Summaries per month",
      "Priority Support",
      "24/7 Customer Support",
      "Markdown Export",
    ],
  },
];

export default plans;

export type { Plan };
