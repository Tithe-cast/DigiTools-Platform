import React from 'react';

const steps = [
  {
    num: '01',
    icon: '/user-icon.png',
    title: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    num: '02',
    icon: '/package.png',
    title: 'Choose Products',
    desc: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    num: '03',
    icon: '/rocket.png',
    title: 'Start Creating',
    desc: 'Download and start using your premium tools immediately.',
  },
];

const Steps = () => (
  <section id="steps" className="py-20 bg-[#f8f9ff]">
    <div className="max-w-[1100px] mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[36px] font-extrabold text-[#101727] mb-3 tracking-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] text-[14px]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num}
            className="relative bg-white border border-[#e5e7eb] rounded-2xl px-8 py-10 text-center hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 transition-all duration-300">

            {/* Step number badge — top right */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#4F39F6] text-white text-[12px] font-bold flex items-center justify-center select-none">
              {s.num}
            </div>

            {/* Icon circle — uses real uploaded PNG */}
            <div className="w-[68px] h-[68px] rounded-full bg-[#f5f3ff] flex items-center justify-center mx-auto mb-6">
              <img src={s.icon} alt={s.title} className="w-9 h-9 object-contain" />
            </div>

            <h3 className="text-[17px] font-bold text-[#101727] mb-3">{s.title}</h3>
            <p className="text-[#627382] text-[13px] leading-[1.75] max-w-[220px] mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
