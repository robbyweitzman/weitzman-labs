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

interface AppLogo {
  x: number
  y: number
  speed: number
  direction: number
  size: number
  appType: 'snapshot' | 'hopescroll'
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const frameCountRef = useRef<number>(0)
  const objectsRef = useRef<{
    stars: Star[]
    planes: Plane[]
    satellites: Satellite[]
    appLogos: AppLogo[]
  }>({ stars: [], planes: [], satellites: [], appLogos: [] })
  const snapshotImageRef = useRef<HTMLImageElement | null>(null)
  const hopescrollImageRef = useRef<HTMLImageElement | null>(null)
  
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

    // Create app logos (3 Snapshot + 3 HopeScroll instances)
    const appLogos: AppLogo[] = []
    const snapshotCount = 3
    const hopescrollCount = 3
    const totalCount = snapshotCount + hopescrollCount

    // Add Snapshot logos
    for (let i = 0; i < snapshotCount; i++) {
      appLogos.push({
        x: Math.random() * width,
        y: (height / totalCount) * (i * 2) + Math.random() * (height / totalCount), // Distribute vertically
        speed: Math.random() * 0.3 + 0.1, // Slow speed like satellites (0.1-0.4)
        direction: Math.random() > 0.5 ? 1 : -1,
        size: 60, // Medium size (40-60px) - increased for better clarity
        appType: 'snapshot'
      })
    }

    // Add HopeScroll logos
    for (let i = 0; i < hopescrollCount; i++) {
      appLogos.push({
        x: Math.random() * width,
        y: (height / totalCount) * (i * 2 + 1) + Math.random() * (height / totalCount), // Interleave with Snapshot
        speed: Math.random() * 0.3 + 0.1, // Slow speed like satellites (0.1-0.4)
        direction: Math.random() > 0.5 ? 1 : -1,
        size: 60, // Medium size (40-60px) - increased for better clarity
        appType: 'hopescroll'
      })
    }

    return { stars, planes, satellites, appLogos }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Enable high-quality image rendering for sharp logos
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Initial setup - set canvas dimensions FIRST
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    objectsRef.current = createObjects(canvas.width, canvas.height)

    // Create gradient background once for reuse (AFTER canvas dimensions are set)
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

    // Load app logo images
    const snapshotImg = new Image()
    snapshotImg.src = "/snapshot-icon-256x256.png"
    snapshotImageRef.current = snapshotImg

    const hopescrollImg = new Image()
    hopescrollImg.src = "/hopescroll-icon-256x256.png"
    hopescrollImageRef.current = hopescrollImg

    // Add click handler for app logos
    const handleCanvasClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = event.clientX - rect.left
      const clickY = event.clientY - rect.top

      // Check if click is on any logo
      const { appLogos } = objectsRef.current
      for (const logo of appLogos) {
        const logoLeft = logo.x - logo.size / 2
        const logoRight = logo.x + logo.size / 2
        const logoTop = logo.y - logo.size / 2
        const logoBottom = logo.y + logo.size / 2

        if (
          clickX >= logoLeft &&
          clickX <= logoRight &&
          clickY >= logoTop &&
          clickY <= logoBottom
        ) {
          // Open App Store link based on app type
          if (logo.appType === 'snapshot') {
            window.open('https://apps.apple.com/us/app/snapshot-screenshot-to-text/id6754900482?mt=12', '_blank')
          } else if (logo.appType === 'hopescroll') {
            window.open('https://apps.apple.com/us/app/hopescroll-daily-motivation/id6755077908', '_blank')
          }
          break
        }
      }
    }

    canvas.addEventListener('click', handleCanvasClick)

    // Change cursor to pointer when hovering over logos
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const { appLogos } = objectsRef.current
      let isOverLogo = false

      for (const logo of appLogos) {
        const logoLeft = logo.x - logo.size / 2
        const logoRight = logo.x + logo.size / 2
        const logoTop = logo.y - logo.size / 2
        const logoBottom = logo.y + logo.size / 2

        if (
          mouseX >= logoLeft &&
          mouseX <= logoRight &&
          mouseY >= logoTop &&
          mouseY <= logoBottom
        ) {
          isOverLogo = true
          break
        }
      }

      canvas.style.cursor = isOverLogo ? 'pointer' : 'default'
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    window.addEventListener("resize", resizeCanvas)

    // Pre-calculate some values outside the animation loop
    const starDrawFn = (ctx: CanvasRenderingContext2D, star: Star, frameCount: number) => {
      const opacity = star.opacity + Math.sin(frameCount * star.twinkleSpeed + star.twinkleOffset) * 0.2
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Animation loop with optimized rendering
    const animate = () => {
      frameCountRef.current++
      const frameCount = frameCountRef.current
      const { width, height } = canvas

      // Use pre-created gradient background
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);

      const { stars, planes, satellites, appLogos } = objectsRef.current

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

      // Update and draw app logos
      const snapshotImg = snapshotImageRef.current
      const hopescrollImg = hopescrollImageRef.current

      appLogos.forEach((logo) => {
        // Move logo
        logo.x += logo.speed * logo.direction

        // Reset logo position when it goes off screen
        if (
          (logo.direction > 0 && logo.x > width + logo.size) ||
          (logo.direction < 0 && logo.x < -logo.size)
        ) {
          logo.x = logo.direction > 0 ? -logo.size : width + logo.size
          // Randomize vertical position when wrapping around
          logo.y = Math.random() * height
        }

        // Draw logo with smooth rendering
        const logoImg = logo.appType === 'snapshot' ? snapshotImg : hopescrollImg
        if (logoImg && logoImg.complete) {
          ctx.save()
          ctx.globalAlpha = 0.9 // Slight transparency for blending
          ctx.drawImage(
            logoImg,
            logo.x - logo.size / 2,
            logo.y - logo.size / 2,
            logo.size,
            logo.size
          )
          ctx.restore()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener('click', handleCanvasClick)
      canvas.removeEventListener('mousemove', handleMouseMove)
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

