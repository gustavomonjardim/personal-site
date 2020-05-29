import React from 'react';

interface Props {
  onClick: string;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <a
      href={onClick}
      download
      className="inline-block w-full px-4 py-2 text-sm font-semibold tracking-wide text-center uppercase border-2 border-black hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
};

export default Button;
