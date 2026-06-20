import React from 'react';

const Banner = () => (
  <section id="home" className="pt-[64px] bg-white">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center py-16 min-h-[480px]">

        {/* ── Left content ── */}
        <div>
          {/* Badge — uses real Dot.png */}
          <div className="inline-flex items-center gap-2 bg-[#f5f3ff] border border-[#ddd6fe] text-[#4F39F6] text-[13px] font-medium px-3.5 py-1.5 rounded-full mb-6">
            <img src="/dot.png" alt="" className="w-4 h-4 object-contain" />
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-[50px] font-extrabold text-[#101727] leading-[1.1] tracking-tight mb-5">
            Supercharge Your<br />Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-[#627382] text-[15px] leading-[1.75] mb-1.5 max-w-[440px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p className="text-[#627382] text-[14px] mb-9">Explore Products</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Primary */}
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#4F39F6] hover:bg-[#3d2ad4] text-white font-semibold text-[14px] px-7 py-[13px] rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200"
            >
              Explore Products
            </button>

            {/* Secondary — uses real Play.png icon */}
            <button className="flex items-center gap-2.5 border border-[#d1d5db] text-[#374151] hover:border-[#4F39F6] hover:text-[#4F39F6] font-semibold text-[14px] px-7 py-[13px] rounded-full transition-all duration-200">
              <img src="/play.png" alt="play" className="w-4 h-4 object-contain" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* ── Right — real banner photo ── */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[430px]">
            <img
              src="/banner.png"
              alt="Digital workflow illustration"
              className="w-full h-auto object-contain rounded-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(79,57,246,0.12))' }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* ── Stats Bar ── */}
    <div className="bg-[#4F39F6]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-3">
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '200+', label: 'Premium Tools' },
            { value: '4.9',  label: 'Rating'        },
          ].map((s, i) => (
            <div key={s.label} className={`py-10 text-center ${i < 2 ? 'border-r border-[#6d59f8]' : ''}`}>
              <div className="text-[38px] font-extrabold text-white leading-none mb-2">{s.value}</div>
              <div className="text-[#c4b5fd] text-[14px] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
