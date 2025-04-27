'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'
import { RefreshCcw, Pause, Play } from 'lucide-react'

interface EntropyProps {
  className?: string
  size?: number
  speed?: number
  specialColor?: string
  cellColor?: string
  bgColor?: string
}

export function Entropy({ 
  className = "", 
  size = 400, 
  speed = 0.5, 
  specialColor = "#ff3a5c", 
  cellColor = "#f0f0f0", 
  bgColor = "#000000" 
}: EntropyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(speed)
  const lastUpdateTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Basic setup
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    // Grid settings
    const cellSize = 10
    const rows = Math.floor(size / cellSize)
    const cols = Math.floor(size / cellSize)
    
    // Game state
    let grid = Array(rows).fill(null).map(() => 
      Array(cols).fill(null).map(() => Math.random() < 0.3)
    )
    
    // Create a pattern of the number 42 in the middle
    function create42Pattern() {
      // Position for the "42" pattern
      const startRow = Math.floor(rows / 2) - 5
      const startCol = Math.floor(cols / 2) - 5
      
      // Define "42" pattern - 1 for alive cells
      const pattern = [
        [0,1,1,0,0,1,1,1,0],
        [1,0,0,1,0,0,0,1,0],
        [0,0,0,1,0,0,1,0,0],
        [0,0,1,0,0,1,0,0,0],
        [0,1,1,1,0,1,1,1,0]
      ]
      
      // Place the pattern in the grid
      pattern.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (startRow + i >= 0 && startRow + i < rows && 
              startCol + j >= 0 && startCol + j < cols) {
            grid[startRow + i][startCol + j] = cell === 1
          }
        })
      })
    }
    
    create42Pattern()
    
    // Track cells that were part of the 42 pattern
    const pattern42Cells = new Set<string>()
    
    function identifyPatternCells() {
      pattern42Cells.clear()
      
      // Position for the "42" pattern
      const startRow = Math.floor(rows / 2) - 5
      const startCol = Math.floor(cols / 2) - 5
      
      // Define "42" pattern
      const pattern = [
        [0,1,1,0,0,1,1,1,0],
        [1,0,0,1,0,0,0,1,0],
        [0,0,0,1,0,0,1,0,0],
        [0,0,1,0,0,1,0,0,0],
        [0,1,1,1,0,1,1,1,0]
      ]
      
      // Mark cells in the 42 pattern
      pattern.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell === 1 && 
              startRow + i >= 0 && startRow + i < rows && 
              startCol + j >= 0 && startCol + j < cols) {
            pattern42Cells.add(`${startRow + i},${startCol + j}`)
          }
        })
      })
    }
    
    identifyPatternCells()
    
    // Count live neighbors using Conway's Game of Life rules
    function countNeighbors(grid: boolean[][], x: number, y: number): number {
      let count = 0
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue
          
          const row = (x + i + rows) % rows
          const col = (y + j + cols) % cols
          
          if (grid[row][col]) count++
        }
      }
      return count
    }
    
    // Update grid based on Conway's Game of Life rules
    function updateGrid() {
      const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(false))
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const neighbors = countNeighbors(grid, i, j)
          
          // Conway's Game of Life rules
          if (grid[i][j]) {
            // Live cell
            newGrid[i][j] = neighbors === 2 || neighbors === 3
          } else {
            // Dead cell
            newGrid[i][j] = neighbors === 3
          }
          
          // Add a special probabilistic rule for cells near the boundary
          if (Math.abs(i - rows/2) < rows/4 && Math.abs(j - cols/2) < cols/4) {
            // Cells near the center have a small chance to be influenced by "42"
            if (Math.random() < 0.002) {
              newGrid[i][j] = !newGrid[i][j]
            }
          }
        }
      }
      
      grid = newGrid
    }
    
    // Draw the grid
    function drawGrid() {
      if (!ctx) return
      
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, size, size)
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j]) {
            // Determine if this was part of the 42 pattern
            const isPatternCell = pattern42Cells.has(`${i},${j}`)
            
            ctx.fillStyle = isPatternCell ? specialColor : cellColor
            ctx.fillRect(
              j * cellSize, 
              i * cellSize, 
              cellSize - 1, 
              cellSize - 1
            )
          }
        }
      }
    }
    
    // Animation loop
    let frameCount = 0
    function animate(timestamp: number) {
      if (!ctx || isPaused) return
      
      // Control animation speed
      const elapsed = timestamp - lastUpdateTimeRef.current
      const updateInterval = 1000 / (10 * animationSpeed) // Slower speed value = longer interval
      
      if (elapsed > updateInterval) {
        lastUpdateTimeRef.current = timestamp
        
        frameCount++
        drawGrid()
        
        // Every 100 frames, reintroduce the 42 pattern
        if (frameCount % 100 === 0) {
          create42Pattern()
        }
        
        // Update grid based on Conway's Game of Life rules
        updateGrid()
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate)
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [size, isPaused, animationSpeed, specialColor, cellColor, bgColor])

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    
    // Reset internal state to force re-initialization via useEffect
    lastUpdateTimeRef.current = 0
    // Trigger re-render which restarts useEffect
    setIsPaused(false) // Ensure it's not paused
    // Force a re-mount could be an option, but might be overkill
    // For simplicity, we might need to manually reset grid state here or rely on useEffect rerun
    
    // Re-initialize directly might be cleaner than relying purely on useEffect restart
    // Let's keep it simple for now and rely on useEffect rerun triggered by state change
  }

  return (
    <div className={`relative bg-black ${className}`} style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/50 backdrop-blur-sm hover:bg-black/70 border-neutral-800"
          onClick={togglePause}
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/50 backdrop-blur-sm hover:bg-black/70 border-neutral-800"
          onClick={resetAnimation}
        >
          <RefreshCcw size={16} />
        </Button>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-black/50 backdrop-blur-sm hover:bg-black/70 border-neutral-800"
            >
              Speed: {animationSpeed.toFixed(1)}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Animation Speed</h4>
              <p className="text-sm text-muted-foreground">
                Adjust the speed of the cellular automaton
              </p>
              <Slider
                defaultValue={[animationSpeed]}
                max={1}
                min={0.1}
                step={0.1}
                onValueChange={(value: number[]) => setAnimationSpeed(value[0])}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}