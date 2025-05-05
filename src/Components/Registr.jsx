import React from 'react'


const Registr = ({name, img}) => {
  return (
    <label
      className="flex items-center justify-start pl-4 bg-cyan-100 p-3"
      htmlFor="name"
    >
      {img}
      <input
        id="name"
        className="pl-2 outline-none flex-1"
        placeholder={name}
        type="text"
        name={name}
      />
    </label>
  );
}

export default Registr