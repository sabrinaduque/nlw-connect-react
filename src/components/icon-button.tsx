/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className="p-1.5 cursor-pointer bg-gray-500 transition-colors duration-300
      hover:bg-blue hover:text-gray-900 text-blue rounded-md"
      {...props}
    />
  );
};

export default IconButton;
