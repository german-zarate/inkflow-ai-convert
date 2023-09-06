import { useRef } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { BsBorderWidth, BsFillEraserFill, BsPencilFill } from 'react-icons/bs';

import Badge from './ui/Badge';
import Button from './ui/Button';
import ColorPicker from './ui/ColorPicker';

interface ToolbarProps {
  handleSelectedTool: (tool: string) => void;
  onSelectedColorChange: (color: string) => void;
  onLineWidthChange: (width: number) => void;
  onClearCanvas: () => void;
  lineWidth: number;
  selectedColor: string;
  selectedTool: string;
}

const Toolbar = ({
  handleSelectedTool,
  onSelectedColorChange,
  onLineWidthChange,
  onClearCanvas,
  lineWidth,
  selectedColor,
  selectedTool,
}: ToolbarProps) => {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const lineWidthRef = useRef<HTMLInputElement>(null);

  const handleColorChange = () => {
    if (colorPickerRef.current) {
      const selectedRefColor = colorPickerRef.current.value;
      onSelectedColorChange(selectedRefColor);
    }
  };

  const handleLineWidthChange = () => {
    if (lineWidthRef.current) {
      const refLineWidth = parseInt(lineWidthRef.current.value, 10);
      onLineWidthChange(refLineWidth);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-2 py-4">
      <h1 className="mb-2 text-center text-2xl font-semibold">
        InkFlow AI Convert Button
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          type="button"
          isSelected={selectedTool === 'pen'}
          onClick={() => handleSelectedTool('pen')}
          tone="primary"
        >
          <BsPencilFill />
        </Button>
        <Button
          type="button"
          isSelected={selectedTool === 'eraser'}
          onClick={() => handleSelectedTool('eraser')}
          tone="error"
        >
          <BsFillEraserFill />
        </Button>
        <Button
          isSelected={false}
          onClick={() => onClearCanvas()}
          tone="success"
        >
          <AiOutlineClear />
        </Button>
        <ColorPicker
          name="color-picker"
          color={selectedColor}
          inputRef={colorPickerRef}
          onChange={handleColorChange}
        />
        <div className="relative">
          <Button isSelected={false} tone="default" disabled>
            <BsBorderWidth />
          </Button>
          <p className="absolute -right-2 -top-2">
            <Badge>{lineWidth} </Badge>
          </p>
        </div>
        <input
          type="range"
          id="linewidth"
          ref={lineWidthRef}
          min="1"
          max="40"
          defaultValue="5"
          onChange={handleLineWidthChange}
          className="grow cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Toolbar;
