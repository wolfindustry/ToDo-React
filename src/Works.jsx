import React from 'react'

const Works = ({title,done}) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col bg-[#F1ECE6] w-[55%] px-5 items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <input defaultChecked={done} className="w-5 h-5" type="checkbox" />
            <div className="p-5 w-full">{title}</div>
            <Trash />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works

const Trash = () => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99999 21.3333C1.99999 22.8 3.19999 24 4.66666 24H15.3333C16.8 24 18 22.8 18 21.3333V5.33333H1.99999V21.3333ZM4.66666 8H15.3333V21.3333H4.66666V8ZM14.6667 1.33333L13.3333 0H6.66666L5.33332 1.33333H0.666656V4H19.3333V1.33333H14.6667Z"
        fill="#B30B04"
      />
    </svg>
  );
};