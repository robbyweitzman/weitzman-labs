"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import styles from "./page.module.css"

// Types
interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
}

interface Plane {
  x: number
  y: number
  speed: number
  direction: number
  blinkInterval: number
  blinkOffset: number
}

interface Satellite {
  x: number
  y: number
  speed: number
  direction: number
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)
  const objectsRef = useRef<{
    stars: Star[]
    planes: Plane[]
    satellites: Satellite[]
  }>({ stars: [], planes: [], satellites: [] })
  
  // Memoize object creation to avoid recreating on each resize
  const createObjects = useCallback((width: number, height: number) => {
    // Create stars
    const stars: Star[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03,
        twinkleOffset: Math.random() * Math.PI * 2, // Random starting phase
      })
    }

    // Create planes
    const planes: Plane[] = []
    for (let i = 0; i < 3; i++) {
      planes.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() > 0.5 ? 1 : -1,
        blinkInterval: Math.floor(Math.random() * 30) + 20,
        blinkOffset: Math.floor(Math.random() * 30), // Random blink offset
      })
    }

    // Create satellites
    const satellites: Satellite[] = []
    for (let i = 0; i < 2; i++) {
      satellites.push({
        x: Math.random() * width,
        y: Math.random() * (height / 3),
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
      })
    }

    return { stars, planes, satellites }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout | null = null
    const resizeCanvas = () => {
      if (resizeTimeout) return
      
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        
        // Only recreate objects when dimensions change significantly
        objectsRef.current = createObjects(canvas.width, canvas.height)
        // Update gradient when canvas is resized
        updateGradientOnResize();
        resizeTimeout = null
      }, 200) // 200ms throttle
    }

    // Initial setup
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    objectsRef.current = createObjects(canvas.width, canvas.height)
    
    window.addEventListener("resize", resizeCanvas)

    // Pre-calculate some values outside the animation loop
    const starDrawFn = (ctx: CanvasRenderingContext2D, star: Star, frameCount: number) => {
      const opacity = star.opacity + Math.sin(frameCount * star.twinkleSpeed + star.twinkleOffset) * 0.2
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Create gradient background once for reuse
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#001845');
      return gradient;
    }
    
    let backgroundGradient = createGradient();
    
    // Update gradient on resize
    const updateGradientOnResize = () => {
      backgroundGradient = createGradient();
    };

    // Animation loop with optimized rendering
    const animate = () => {
      frameCountRef.current++
      const frameCount = frameCountRef.current
      const { width, height } = canvas
      
      // Use pre-created gradient background
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);

      const { stars, planes, satellites } = objectsRef.current

      // Batch similar operations together
      
      // Draw stars
      stars.forEach(star => starDrawFn(ctx, star, frameCount))

      // Update and draw planes
      ctx.fillStyle = "#ffffff"
      planes.forEach((plane) => {
        // Move plane
        plane.x += plane.speed * plane.direction

        // Reset plane position when it goes off screen
        if ((plane.direction > 0 && plane.x > width + 10) || (plane.direction < 0 && plane.x < -10)) {
          plane.x = plane.direction > 0 ? -10 : width + 10
          plane.y = Math.random() * (height / 2)
        }

        // Draw plane body
        ctx.beginPath()
        ctx.rect(plane.x - 3, plane.y - 1, 6, 2)
        ctx.fill()

        // Draw plane wings
        ctx.beginPath()
        ctx.rect(plane.x - 1, plane.y - 3, 2, 6)
        ctx.fill()

        // Blinking light - use modulo with offset for varied blinking
        if ((frameCount + plane.blinkOffset) % plane.blinkInterval < plane.blinkInterval / 2) {
          ctx.beginPath()
          ctx.fillStyle = "#ff0000"
          ctx.arc(plane.x + (plane.direction > 0 ? 3 : -3), plane.y, 1, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = "#ffffff" // Reset fill style
        }
      })

      // Update and draw satellites
      ctx.fillStyle = "#aaccff"
      satellites.forEach((satellite) => {
        // Move satellite
        satellite.x += satellite.speed * satellite.direction

        // Reset satellite position when it goes off screen
        if (
          (satellite.direction > 0 && satellite.x > width + 10) ||
          (satellite.direction < 0 && satellite.x < -10)
        ) {
          satellite.x = satellite.direction > 0 ? -10 : width + 10
          satellite.y = Math.random() * (height / 3)
        }

        // Draw satellite body
        ctx.beginPath()
        ctx.rect(satellite.x - 2, satellite.y - 1, 4, 2)
        ctx.fill()

        // Draw satellite panels
        ctx.fillStyle = "#88aaff"
        ctx.beginPath()
        ctx.rect(satellite.x - 4, satellite.y, 8, 1)
        ctx.fill()
        ctx.fillStyle = "#aaccff" // Reset fill style
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationRef.current)
    }
  }, [createObjects])

  return (
    <main className={styles.main}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <h1 className={styles.title}>Weitzman Labs</h1>
    </main>
  )
}

