import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'md', asChild, children }: HeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component 
      className={clsx('text-gray-100 font-bold', 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      }
    )}
    >
      {children}
    </Component>
  );
}
