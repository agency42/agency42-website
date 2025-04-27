'use client'

import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  MotionStyle,
} from 'framer-motion'
import { cn } from '@/lib/utils'

type TiltProps = {
  children: React.ReactNode
  className?: string
  style?: MotionStyle
  rotationFactor?: number
  isRevese?: boolean
  springOptions?: any
}

export function Tilt({
  children,
  className,
  style,
  rotationFactor = 15,
  isRevese = false,
  springOptions,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, springOptions)
  const ySpring = useSpring(y, springOptions)

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isRevese
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  )
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isRevese
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  )

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPos = mouseX / width - 0.5
    const yPos = mouseY / height - 0.5

    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: {
  className?: string
  size?: number
  springOptions?: any
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const [parentElement, setParentElement] = React.useState<HTMLElement | null>(null)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  React.useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement
      if (parent) {
        // Ensure parent is positioned correctly for absolute positioning
        if (getComputedStyle(parent).position === 'static') {
          parent.style.position = 'relative'
        }
        parent.style.overflow = 'hidden' // Keep spotlight contained
        setParentElement(parent)
      }
    }
  }, [])

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return
      const { left, top } = parentElement.getBoundingClientRect()
      mouseX.set(event.clientX - left)
      mouseY.set(event.clientY - top)
    },
    [mouseX, mouseY, parentElement]
  )

  React.useEffect(() => {
    if (!parentElement) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseenter', handleMouseEnter)
    parentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove)
      parentElement.removeEventListener('mouseenter', handleMouseEnter)
      parentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [parentElement, handleMouseMove])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        // Adjust spotlight color for dark mode
        'from-neutral-400/50 via-neutral-500/20 to-neutral-600/10 dark:from-neutral-600/50 dark:via-neutral-700/20 dark:to-neutral-800/10',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  )
} 