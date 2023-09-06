import { cn } from '@/lib/utils';

type BadgeProps = {
  shape?: 'square' | 'rounded' | 'pill';
  size?: 'small' | 'medium' | 'large';
  border?: 'border-full' | 'border-none';
  tone?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  classNames?: string;
  children: React.ReactNode;
};

const baseClasses = 'inline-flex items-center font-medium';

// @ts-ignore
const shapeClasses: Record<BadgeProps['shape'], string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  pill: 'rounded-full',
};

// @ts-ignore
const sizeClasses: Record<BadgeProps['size'], string> = {
  small: 'px-2 py-1 text-xs',
  medium: 'px-2.5 py-0.5 text-xs',
  large: 'px-3 py-0.5 text-sm',
};

// @ts-ignore
const borderClasses: Record<BadgeProps['border'], string> = {
  'border-full': 'ring-1 ring-inset',
  'border-none': 'ring-0',
};

// @ts-ignore
const toneClasses: Record<BadgeProps['tone'], string> = {
  primary: 'bg-indigo-50 text-indigo-700 ring-indigo-600/10',
  secondary: 'bg-gray-50 text-gray-700 ring-gray-600/10',
  success: 'bg-green-50 text-green-700 ring-green-600/10',
  danger: 'bg-red-50 text-red-700 ring-red-600/10',
  warning: 'bg-yellow-50 text-yellow-700 ring-yellow-600/10',
  info: 'bg-sky-50 text-sky-700 ring-sky-600/10',
};

const Badge = ({
  children,
  shape = 'rounded',
  size = 'small',
  border = 'border-full',
  tone = 'primary',
  classNames = '',
}: BadgeProps) => {
  return (
    <span
      className={cn(
        baseClasses,
        sizeClasses[size],
        shapeClasses[shape],
        borderClasses[border],
        toneClasses[tone],
        classNames,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
