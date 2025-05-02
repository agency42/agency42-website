'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FlickeringGridProps {
  /** Number of rows in the grid */
  rows?: number
  /** Number of columns in the grid */
  columns?: number
  /** Color for active cells */
  activeColor?: string
  /** Color for inactive cells */
  inactiveColor?: string
  /** Speed of the animation (lower is faster) */
  speed?: number
  /** Probability of a cell becoming active (0-1) */
  probability?: number
  /** Additional CSS classes */
  className?: string
}

export function FlickeringGrid({
  rows = 30,
  columns = 30,
  activeColor = 'hsl(var(--accent))',
  inactiveColor = 'hsl(var(--muted-foreground)/0.2)',
  speed = 100,
  probability = 0.1,
  className
}: FlickeringGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [grid, setGrid] = useState<boolean[][]>([])
  const requestRef = useRef<number>()

  // Initialize grid
  useEffect(() => {
    const initialGrid = Array(rows).fill(0).map(() => 
      Array(columns).fill(0).map(() => Math.random() < probability)
    )
    setGrid(initialGrid)
  }, [rows, columns, probability])

  // Game of life flicker logic
  useEffect(() => {
    if (!grid.length) return

    const updateGrid = () => {
      setGrid(prevGrid => {
        return prevGrid.map(row => 
          row.map(() => Math.random() < probability)
        )
      })

      requestRef.current = window.setTimeout(() => {
        requestAnimationFrame(updateGrid)
      }, speed)
    }

    requestAnimationFrame(updateGrid)

    return () => {
      if (requestRef.current) {
        clearTimeout(requestRef.current)
      }
    }
  }, [grid.length, probability, speed])

  return (
    <div 
      ref={gridRef} 
      className={cn('overflow-hidden', className)}
      style={{ height: 'calc(100% - 1px)', width: 'calc(100% - 1px)' }}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1px',
          paddingTop: '1px',
          paddingLeft: '1px'
        }}
      >
        {grid.map((row, i) => 
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="transition-colors duration-300"
              style={{
                backgroundColor: cell ? activeColor : inactiveColor,
                aspectRatio: '1/1'
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}
