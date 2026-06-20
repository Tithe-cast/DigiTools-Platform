import React from 'react';

const plans = [
  {
    name: 'Starter',
    sub: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: ['Access to 10 free tools','Basic templates','Community support','1 project per month'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    sub: 'Best for professionals',
    price: 29,
    period: 'Month',
    features: ['Access to all premium tools','Unlimited templates','Priority support','Unlimited projects','Cloud sync','Advanced analytics'],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    sub: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: ['Everything in Pro','Team collaboration','Custom integrations','Dedicated support','SLA guarantee','Custom branding'],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="text-[36px] font-extrabold text-[#0f172a] mb-3 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-[#627382] text-[14px]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map(plan => (
          <div key={plan.name}
            className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1
              ${plan.popular
                ? 'bg-[#4F39F6] text-white shadow-2xl shadow-purple-300/50 py-10 px-8'
                : 'bg-white border border-[#e5e7eb] hover:shadow-xl hover:shadow-purple-100/50 py-8 px-8'}`}>

            {/* Most Popular badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fbbf24] text-[#78350f] text-[12px] font-bold px-4 py-1.5 rounded-full shadow">
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <div className="mb-5">
              <h3 className={`text-[20px] font-bold mb-1 ${plan.popular ? 'text-white' : 'text-[#0f172a]'}`}>{plan.name}</h3>
              <p className={`text-[13px] ${plan.popular ? 'text-purple-200' : 'text-[#627382]'}`}>{plan.sub}</p>
            </div>

            {/* Price */}
            <div className="mb-7">
              <span className={`text-[48px] font-extrabold leading-none ${plan.popular ? 'text-white' : 'text-[#0f172a]'}`}>${plan.price}</span>
              <span className={`text-[14px] ml-1 ${plan.popular ? 'text-purple-200' : 'text-[#627382]'}`}>/{plan.period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px]">
                  <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-purple-200' : 'text-[#4F39F6]'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className={plan.popular ? 'text-purple-100' : 'text-[#374151]'}>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className={`w-full font-semibold text-[14px] py-3.5 rounded-full transition-all duration-200
              ${plan.popular
                ? 'bg-white text-[#4F39F6] hover:bg-purple-50'
                : 'bg-[#4F39F6] text-white hover:bg-[#3d2ad4] hover:shadow-lg hover:shadow-purple-200'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
