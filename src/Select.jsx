import React from 'react'

const Select = ({children}) => {
  return (
    <>
      <button className="group w-[50%] items-center flex border-b-transparent justify-center p-5 border-b hover:border-b-orange-300">
        <p className="font-medium text-2xl">{children}</p>
      </button>
    </>
  );
}

export default Select