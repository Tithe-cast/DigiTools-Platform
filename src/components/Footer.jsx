import React from 'react';

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

    {/* Dark Footer */}
    <div className="bg-[#101727]">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-bold text-[20px] mb-3">DigiTools</p>
            <p className="text-[#9ca3af] text-[13px] leading-[1.7]">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features','Pricing','Templates','Integrations'].map(l => (
                <li key={l}><a href="#" className="text-[#9ca3af] hover:text-white text-[13px] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Company</h4>
            <ul className="space-y-3">
              {['About','Blog','Careers','Press'].map(l => (
                <li key={l}><a href="#" className="text-[#9ca3af] hover:text-white text-[13px] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Documentation','Help Center','Community','Contact'].map(l => (
                <li key={l}><a href="#" className="text-[#9ca3af] hover:text-white text-[13px] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Social Links</h4>
            <div className="flex gap-2.5">
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full bg-[#1f2937] hover:bg-[#374151] flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-[#1f2937] hover:bg-[#374151] flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-9 h-9 rounded-full bg-[#1f2937] hover:bg-[#374151] flex items-center justify-center transition-colors" aria-label="X">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f2937] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6b7280] text-[13px]">© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms of Service','Cookies'].map(l => (
              <a key={l} href="#" className="text-[#6b7280] hover:text-white text-[13px] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
