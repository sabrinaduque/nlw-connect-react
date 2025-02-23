/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="px-5 h-12 w-full flex justify-between items-center cursor-pointer bg-gray-500 transition-colors duration-300
      hover:bg-blue hover:text-gray-900 text-blue font-semibold rounded-lg"
      {...props}
    />
  );
};

export default Button;
