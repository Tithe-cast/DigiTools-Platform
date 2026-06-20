import React from 'react';

const CartItem = ({ item, onRemove }) => (
  <div className="flex items-center gap-3 py-4 px-1 border-b border-[#f3f4f6] last:border-b-0">
    {/* Icon */}
    <div className="w-10 h-10 rounded-lg bg-[#f5f3ff] flex items-center justify-center text-[20px] flex-shrink-0">
      {item.icon}
    </div>
    {/* Info */}
    <div className="flex-1 min-w-0">
      <p className="text-[14px] font-semibold text-[#0f172a] truncate">{item.name}</p>
      <p className="text-[13px] text-[#627382] font-medium">${item.price}</p>
    </div>
    {/* Remove */}
    <button onClick={() => onRemove(item.id)}
      className="text-[#ef4444] hover:text-[#dc2626] text-[13px] font-semibold transition-colors flex-shrink-0">
      Remove
    </button>
  </div>
);

export default CartItem;
