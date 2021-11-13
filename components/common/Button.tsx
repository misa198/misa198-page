import { FC } from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
}

const Button: FC<Props> = ({
  children,
  color = 'primary',
  variant = 'contained',
  className,
}) => {
  return (
    <button
      style={{
        width: 'fit-content',
      }}
      className={classnames(
        `${className} rounded py-2 px-4 cursor-pointer transition-all duration-300`,
        {
          'bg-primary text-white hover:bg-green-800':
            variant === 'contained' && color === 'primary',
          'bg-gray-500 text-white hover:bg-gray-700':
            variant === 'contained' && color === 'secondary',
          'bg-red-500 text-white hover:bg-red-700':
            variant === 'contained' && color === 'error',
          'bg-green-500 text-white hover:bg-green-700':
            variant === 'contained' && color === 'success',
          'bg-yellow-500 text-white hover:bg-yellow-700':
            variant === 'contained' && color === 'warning',

          'text-highlight hover:text-green-800':
            variant === 'text' && color === 'primary',
          'text-gray-500 hover:text-gray-700':
            variant === 'text' && color === 'secondary',
          'text-red-500 hover:text-red-700':
            variant === 'text' && color === 'error',
          'text-green-500 hover:text-green-700':
            variant === 'text' && color === 'success',
          'text-yellow-500 hover:text-yellow-700':
            variant === 'text' && color === 'warning',

          'border border-primary text-highlight hover:border-green-800 hover:text-green-800':
            variant === 'outlined' && color === 'primary',
          'border border-gray-500 text-gray-500 hover:border-gray-700 hover:text-gray-700':
            variant === 'outlined' && color === 'secondary',
          'border border-red-500 text-red-500 hover:border-red-700 hover:text-red-700':
            variant === 'outlined' && color === 'error',
          'border border-green-500 text-green-500 hover:border-green-700 hover:text-green-700':
            variant === 'outlined' && color === 'success',
          'border border-yellow-500 text-yellow-500 hover:border-yellow-700 hover:text-yellow-700':
            variant === 'outlined' && color === 'warning',
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
