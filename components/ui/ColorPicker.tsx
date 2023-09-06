import type { InputHTMLAttributes, RefObject } from 'react';

import { cn } from '@/lib/utils';

interface ColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  color?: string;
  shape?: 'square' | 'rounded' | 'pill';
  inputRef?: RefObject<HTMLInputElement>;
}

const baseClasses =
  'cursor-pointer appearance-none border-none font-semibold shadow-md h-10 w-10';

// @ts-ignore
const shapeClasses: Record<ColorPickerProps['shape'], string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  pill: 'rounded-full',
};

const ColorPicker = ({
  color = '#000',
  shape = 'square',
  name,
  inputRef,
  ...restProps
}: ColorPickerProps) => {
  return (
    <label htmlFor={name}>
      <input
        {...restProps}
        id={name}
        type="color"
        value={`${color}`}
        ref={inputRef}
        className={cn(baseClasses, shapeClasses[shape])}
      />
      <span className="hidden">Color Picker</span>
    </label>
  );
};

export default ColorPicker;
