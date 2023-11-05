import React from "react";

export default function IconItem({ icon, text }) {
    return (
      <div className="hover:bg-[#331c1c2a] transition-all nth-child pl-2 pr-10 "   >
        <div className="flex items-center gap-4 cursor-pointer px-4 py-4">
          {React.createElement(icon, {
            sx: { fontSize: 20, color: "#0000008a" },
            className: "",
          })}
          <span className="text-[14px]">{text}</span>
        </div>
      </div>
    );
  }