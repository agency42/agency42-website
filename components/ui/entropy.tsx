"use client";
import { useEffect, useRef } from "react";

interface EntropyProps {
  className?: string;
  size?: number;
  speed?: number;
  specialColor?: string;
  cellColor?: string;
  bgColor?: string;
  initialDensity?: number;
  specialCellProbability?: number;
  preWarmSteps?: number;
}

export function Entropy({
  className = "",
  size = 400,
  speed = 0.5,
  specialColor = "#ff3a5c",
  cellColor = "#f0f0f0",
  bgColor = "#000000",
  initialDensity = 0.3,
  specialCellProbability = 0.1,
  preWarmSteps = 3,
}: EntropyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const animationSpeed = speed;
  const lastUpdateTimeRef = useRef(0);
  const specialCellsRef = useRef(new Set<string>());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Basic setup
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // Grid settings
    const cellSize = 10;
    const rows = Math.floor(size / cellSize);
    const cols = Math.floor(size / cellSize);

    // Initial Game state using initialDensity prop
    let grid = Array(rows)
      .fill(null)
      .map(() =>
        Array(cols)
          .fill(null)
          .map(() => Math.random() < initialDensity)
      );

    // Identify initial special cells based on specialCellProbability
    specialCellsRef.current.clear();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] && Math.random() < specialCellProbability) {
          specialCellsRef.current.add(`${i},${j}`);
        }
      }
    }

    // Count live neighbors using Conway's Game of Life rules
    function countNeighbors(grid: boolean[][], x: number, y: number): number {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;

          const row = (x + i + rows) % rows;
          const col = (y + j + cols) % cols;

          if (grid[row][col]) count++;
        }
      }
      return count;
    }

    // Update grid based on Conway's Game of Life rules
    function updateGrid() {
      const newGrid = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(false));

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const neighbors = countNeighbors(grid, i, j);

          if (grid[i][j]) {
            newGrid[i][j] = neighbors === 2 || neighbors === 3;
          } else {
            newGrid[i][j] = neighbors === 3;
          }
        }
      }
      grid = newGrid;
    }

    // Draw the grid
    function drawGrid() {
      if (!ctx) return;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j]) {
            // Check if this cell is marked as special
            const isSpecialCell = specialCellsRef.current.has(`${i},${j}`);

            ctx.fillStyle = isSpecialCell ? specialColor : cellColor;
            ctx.fillRect(
              j * cellSize,
              i * cellSize,
              cellSize - 1,
              cellSize - 1
            );
          }
        }
      }
    }

    // Run a few simulation steps before the first draw to avoid initial flash
    const initialSteps = preWarmSteps;
    for (let i = 0; i < initialSteps; i++) {
      updateGrid();
    }

    // Animation loop
    function animate(timestamp: number) {
      if (!ctx) return;

      // Control animation speed
      const elapsed = timestamp - lastUpdateTimeRef.current;
      const updateInterval = 1000 / (10 * animationSpeed);

      if (elapsed > updateInterval) {
        lastUpdateTimeRef.current = timestamp;

        drawGrid();

        // Update grid based on Conway's Game of Life rules
        updateGrid();
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    // Draw the pre-stepped grid once immediately before starting the animation loop
    drawGrid();
    lastUpdateTimeRef.current = performance.now(); // Set initial time for speed control

    animationRef.current = requestAnimationFrame(animate); // Start animation loop

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    size,
    animationSpeed,
    specialColor,
    cellColor,
    bgColor,
    initialDensity,
    specialCellProbability,
    preWarmSteps,
  ]);

  return (
    <div
      className={`relative bg-black ${className}`}
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
