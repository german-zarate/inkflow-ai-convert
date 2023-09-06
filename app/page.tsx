'use client';

import { useRef, useState } from 'react';

import Canvas from '@/components/Canvas';
import Navbar from '@/components/Navbar';
import Toolbar from '@/components/Toolbar';

const Home = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [lineWidth, setLineWidth] = useState<number>(5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedTool, setSelectedTool] = useState<string>('pen');

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

  return (
    <>
      <Navbar />
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
      </main>
    </>
  );
};

export default Home;
