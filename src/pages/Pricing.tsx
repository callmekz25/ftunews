export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for casual readers",
      features: [
        "Access to all public stories",
        "Basic search and filtering",
        "Read up to 3 stories per week",
        "Community access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "9.99",
      period: "/month",
      description: "For travel enthusiasts",
      features: [
        "Unlimited story access",
        "Exclusive member stories",
        "Ad-free reading experience",
        "Monthly newsletter with curated picks",
        "Save unlimited bookmarks",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Creator",
      price: "29.99",
      period: "/month",
      description: "For travel writers",
      features: [
        "Everything in Pro +",
        "Publish unlimited stories",
        "Analytics dashboard",
        "Revenue share program",
        "Direct reader communication",
        "Educational resources",
      ],
      cta: "Become a Creator",
      highlighted: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600">
          Choose the perfect plan for your travel story needs
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border-2 p-8 transition ${
              plan.highlighted
                ? "border-black bg-black text-white transform scale-105"
                : "border-gray-300 hover:border-black"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-sm mb-4 opacity-75">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              {plan.period && (
                <span className="text-sm opacity-75">{plan.period}</span>
              )}
            </div>

            <button
              className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                plan.highlighted
                  ? "bg-white text-black hover:opacity-80"
                  : "border-2 border-black hover:bg-black hover:text-white"
              }`}
            >
              {plan.cta}
            </button>

            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-lg">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="border-t border-gray-300 pt-12">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
            <p className="text-gray-600 text-sm">
              Yes, you can cancel your subscription at any time without
              penalties. Your access will continue until the end of your billing
              period.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600 text-sm">
              We accept all major credit cards, PayPal, and digital payment
              methods. Your payment information is always secure.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Is there a free trial?</h3>
            <p className="text-gray-600 text-sm">
              Yes! Pro and Creator plans come with a 14-day free trial. No
              credit card required to get started.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Can I upgrade or downgrade?</h3>
            <p className="text-gray-600 text-sm">
              Absolutely! You can change your plan at any time. Pricing
              adjustments will be reflected in your next billing cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
