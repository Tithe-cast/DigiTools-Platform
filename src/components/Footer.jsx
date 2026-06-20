port React from 'react';

const Footer = () => (
  <footer>
    {/* Purple CTA Section */}
    <div className="bg-[#4F39F6] py-20">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white mb-4 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-[15px] mb-2 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
        </p>
        <p className="text-purple-200 text-[15px] mb-9">Start your free trial today.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button className="bg-white text-[#4F39F6] hover:bg-purple-50 font-semibold text-[14px] px-7 py-3 rounded-full transition-colors">
            Explore Products
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 font-semibold text-[14px] px-7 py-3 rounded-full transition-colors">
            View Pricing
          </button>
        </div>
        <p className="text-purple-300 text-[13px]">
          14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
        </p>
      </div>
    </div>