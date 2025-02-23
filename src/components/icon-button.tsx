/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {}

export const IconButton = ({ className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        'p-1.5 cursor-pointer bg-gray-500 transition-colors duration-300 hover:bg-blue hover:text-gray-900 text-blue rounded-md',
        className,
      )}
      {...props}
    />
  );
};

export default IconButton;
