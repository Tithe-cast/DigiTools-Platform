import React, { useState } from 'react';

const tagMap = {
  popular:     { bg: 'bg-[#f0ebff]', text: 'text-[#4F39F6]',  label: 'Popular'     },
  new:         { bg: 'bg-[#e6faf3]', text: 'text-[#059669]',  label: 'New'         },
  'best-seller':{ bg: 'bg-[#fef9e7]', text: 'text-[#d97706]', label: 'Best Seller' },
};

const periodMap = {
  monthly:  '/Mo',
  yearly:   '/Year',
  'one-time': '/One-Time',
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const [justAdded, setJustAdded] = useState(false);
  const tag = tagMap[product.tagType] || tagMap.popular;

  const handleBuy = () => {
    if (isInCart) return;
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="relative bg-white border border-[#e5e7eb] rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 transition-all duration-300">
      {/* Tag badge — top right */}
      <span className={`absolute top-4 right-4 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tag.bg} ${tag.text}`}>
        {tag.label}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#f5f3ff] flex items-center justify-center text-[22px] mb-4 flex-shrink-0">
        {product.icon}
      </div>

      {/* Name */}
      <h3 className="text-[17px] font-bold text-[#0f172a] mb-2 pr-14 leading-tight">{product.name}</h3>

      {/* Description */}
      <p className="text-[#627382] text-[13px] leading-[1.6] mb-4">{product.description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-[22px] font-extrabold text-[#0f172a]">${product.price}</span>
        <span className="text-[#627382] text-[13px] font-medium ml-0.5">{periodMap[product.period]}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-[13px] text-[#374151]">
            <svg className="w-4 h-4 text-[#4F39F6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Now button */}
      <button onClick={handleBuy} disabled={isInCart}
        className={`w-full font-semibold text-[14px] py-3 rounded-full transition-all duration-200
          ${isInCart
            ? 'bg-[#f0ebff] text-[#4F39F6] cursor-default'
            : justAdded
              ? 'bg-[#059669] text-white'
              : 'bg-[#4F39F6] hover:bg-[#3d2ad4] text-white hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5'
          }`}
      >
        {isInCart ? '✓ Added to Cart' : justAdded ? 'Added to Cart!' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
