'use client';

import { useEffect, useRef } from 'react';

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  selectedTool: string;
  selectedColor: string;
  lineWidth: number;
}

const Canvas = ({
  canvasRef,
  selectedTool,
  selectedColor,
  lineWidth,
}: CanvasProps) => {
  const isDrawingRef = useRef(false);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctxRef.current = ctx;
    }
  }, [canvasRef]);

  const draw = (x: number, y: number) => {
    if (!isDrawingRef.current || !ctxRef.current) return;

    ctxRef.current.lineWidth = lineWidth;
    ctxRef.current.lineCap = 'round';
    ctxRef.current.strokeStyle =
      selectedTool === 'eraser' ? 'white' : selectedColor;

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const startDrawing = (x: number, y: number) => {
    if (ctxRef.current) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(x, y);
      isDrawingRef.current = true;
    }
  };

  const stopDrawing = () => {
    if (isDrawingRef.current && ctxRef.current) {
      ctxRef.current.closePath();
      isDrawingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    stopDrawing();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      startDrawing(x, y);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      draw(x, y);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (canvasRef.current && e.touches.length === 1) {
      const touch = e.touches[0];
      const x = touch.clientX - canvasRef.current.getBoundingClientRect().left;
      const y = touch.clientY - canvasRef.current.getBoundingClientRect().top;
      startDrawing(x, y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (canvasRef.current && e.touches.length === 1) {
      const touch = e.touches[0];
      const x = touch.clientX - canvasRef.current.getBoundingClientRect().left;
      const y = touch.clientY - canvasRef.current.getBoundingClientRect().top;
      draw(x, y);
    }
  };

  const handleTouchEnd = () => {
    stopDrawing();
  };

  const initialCanvasWidth = Math.round(window.innerWidth * 0.8);
  const initialCanvasHeight = Math.round(window.innerHeight * 0.6);

  return (
    <div className="flex h-fit w-fit items-center border border-gray-400 bg-white">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        width={initialCanvasWidth}
        height={initialCanvasHeight}
      />
    </div>
  );
};

export default Canvas;
