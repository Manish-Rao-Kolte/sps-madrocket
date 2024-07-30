import { createRef } from "react";
import { forwardRef } from "react";
import React from "react";

const LinkItem = forwardRef(({ icon = React.Component, text = "" }, ref) => {
  return (
    <div
      className='flex items-center gap-1 justify-start h-6 xl:h-8 px-2 rounded-lg hover:bg-sky-400 hover:bg-opacity-30 hover:cursor-pointer'
      ref={(el) => ref.current.push(el || createRef())}
    >
      <div className='h-full w-auto p-1 text-[#67bbff]'>{icon}</div>
      <span className='text-sm font-medium'>{text}</span>
    </div>
  );
});

export default LinkItem;
