'use client';

import { useRef, useState } from 'react';

import Canvas from '@/components/Canvas';
import Toolbar from '@/components/Toolbar';
import Button from '@/components/ui/Button';
import {
  addConvertedText,
  convertText,
} from '@/lib/actions/convertedText.action';

const Home = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [lineWidth, setLineWidth] = useState<number>(5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedTool, setSelectedTool] = useState<string>('pen');
  const [extractedText, setExtractedText] = useState<string>('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSelectedTool = (tool: string) => {
    setSelectedTool(tool);
  };

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleLineWidthChange = (width: number) => {
    setLineWidth(width);
  };

  const handelClearCanvas = () => {
    setSelectedTool('pen');
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context?.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );
    }
  };

  const handleCloudSave = async () => {
    if (extractedText !== 'request for data...' && extractedText !== '') {
      await addConvertedText({ extractedText, imageUrl });
    }
  };

  const handleCanvasSave = async () => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png');
      const outputData = await convertText(dataURL);

      if (outputData?.imageUrl && outputData?.data?.google?.text) {
        const outputExtractedText = outputData.data.google.text;
        setExtractedText(outputExtractedText);
        setImageUrl(outputData.imageUrl);
      }
    }
  };

  return (
    <main className="container mx-auto flex flex-col items-center gap-4">
      <Toolbar
        handleSelectedTool={handleSelectedTool}
        onSelectedColorChange={handleSelectedColor}
        onLineWidthChange={handleLineWidthChange}
        onClearCanvas={handelClearCanvas}
        lineWidth={lineWidth}
        selectedColor={selectedColor}
        selectedTool={selectedTool}
      />
      <Canvas
        canvasRef={canvasRef}
        lineWidth={lineWidth}
        selectedColor={selectedColor}
        selectedTool={selectedTool}
      />
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button onClick={handleCanvasSave} tone="primary">
          Get Output
        </Button>

        <p className="min-w-[200px] rounded-xl border px-4 py-2 text-gray-700 dark:text-gray-50">
          {extractedText || 'request for data...'}
        </p>
        <Button onClick={handleCloudSave} tone="secondary">
          save to cloud
        </Button>
      </div>
    </main>
  );
};

export default Home;
