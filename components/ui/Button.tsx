import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  isSelected?: boolean;
  shape?: 'square' | 'rounded' | 'pill';
  tone?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  icon_position?: 'left' | 'right';
  size?: 'xs' | 'sm' | 'base' | 'xl' | 'xxl';
  fill?: 'base' | 'outline';
  isGlow?: boolean;
}

const testClasses =
  'inline-flex cursor-pointer items-center justify-center py-2 text-center tracking-wide outline-none transition-all duration-200 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:select-none disabled:opacity-60 font-medium space-x-2';

const toneClasses: Record<
  // @ts-ignore
  ButtonProps['tone'],
  // @ts-ignore
  Record<ButtonProps['fill'], string>
> = {
  default: {
    base: 'dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80',
    outline:
      'dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 border border-slate-300 text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80',
  },
  primary: {
    base: 'bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90',
  },
  secondary: {
    base: 'bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90',
    outline:
      'border border-secondary text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90',
  },
  info: {
    base: 'bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90',
    outline:
      'border border-info text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90',
  },
  success: {
    base: 'bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90',
    outline:
      'border border-success text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success/90',
  },
  warning: {
    base: 'bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90',
    outline:
      'border border-warning text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90',
  },
  error: {
    base: 'bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90',
    outline:
      'border border-error text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90',
  },
};

const selectedClasses: Record<
  // @ts-ignore
  ButtonProps['tone'],
  // @ts-ignore
  Record<ButtonProps['fill'], string>
> = {
  default: {
    base: 'dark:bg-navy-450 bg-slate-200',
    outline: 'dark:bg-navy-500 bg-slate-150',
  },
  primary: {
    base: 'bg-primary-focus dark:bg-accent-focus',
    outline: 'bg-primary text-white dark:bg-accent dark:text-white',
  },
  secondary: {
    base: 'bg-secondary-focus',
    outline: 'bg-secondary text-white dark:bg-secondary dark:text-white',
  },
  info: {
    base: 'bg-info-focus',
    outline: 'bg-info text-white',
  },
  success: {
    base: 'bg-success-focus',
    outline: 'bg-success text-white',
  },
  warning: {
    base: 'bg-warning-focus',
    outline: 'bg-warning text-white',
  },
  error: {
    base: 'bg-error-focus',
    outline: 'bg-error text-white',
  },
};

// @ts-ignore
const shapeClasses: Record<ButtonProps['shape'], string> = {
  square: 'rounded-none',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
};

// @ts-ignore
const glowClasses: Record<ButtonProps['tone'], string> = {
  default: 'shadow-lg shadow-navy-200/50 dark:shadow-navy-500/50',
  primary: 'shadow-lg shadow-primary/50',
  secondary: 'shadow-lg shadow-secondary/50',
  info: 'shadow-lg shadow-info/50',
  success: 'shadow-lg shadow-success/50',
  warning: 'shadow-lg shadow-warning/50',
  error: 'shadow-lg shadow-error/50',
};

// @ts-ignore
const sizeClasses: Record<ButtonProps['size'], string> = {
  xs: 'h-6 px-3 text-xs',
  sm: 'h-8 px-4 text-xs',
  base: 'px-5',
  xl: 'h-11 text-base px-5 ',
  xxl: 'h-12 text-base px-5 ',
};

const Button = ({
  isGlow = false,
  isSelected = false,
  fill = 'outline',
  size = 'base',
  type = 'button',
  shape = 'rounded',
  tone = 'default',
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(
        testClasses,
        shapeClasses[shape],
        sizeClasses[size],
        toneClasses[tone][fill],
        isGlow && glowClasses[tone],
        isSelected && selectedClasses[tone][fill],
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
