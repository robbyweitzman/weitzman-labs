"use client"

import { useEffect, useRef, useCallback } from "react"
import styles from "./page.module.css"

const TWO_PI = Math.PI * 2

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

function hitTestLogos(logos: AppLogo[], x: number, y: number): AppLogo | null {
  for (const logo of logos) {
    const half = logo.size / 2
    if (
      x >= logo.x - half &&
      x <= logo.x + half &&
      y >= logo.y - half &&
      y <= logo.y + half
    ) {
      return logo
    }
  }
  return null
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

  const createObjects = useCallback((width: number, height: number) => {
    const stars: Star[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03,
        twinkleOffset: Math.random() * TWO_PI,
      })
    }

    const planes: Plane[] = []
    for (let i = 0; i < 3; i++) {
      planes.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() > 0.5 ? 1 : -1,
        blinkInterval: Math.floor(Math.random() * 30) + 20,
        blinkOffset: Math.floor(Math.random() * 30),
      })
    }

    const satellites: Satellite[] = []
    for (let i = 0; i < 2; i++) {
      satellites.push({
        x: Math.random() * width,
        y: Math.random() * (height / 3),
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const appLogos: AppLogo[] = []
    const totalCount = 6

    for (let i = 0; i < 3; i++) {
      appLogos.push({
        x: Math.random() * width,
        y: (height / totalCount) * (i * 2) + Math.random() * (height / totalCount),
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
        size: 60,
        appType: 'snapshot',
      })
    }

    for (let i = 0; i < 3; i++) {
      appLogos.push({
        x: Math.random() * width,
        y: (height / totalCount) * (i * 2 + 1) + Math.random() * (height / totalCount),
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
        size: 60,
        appType: 'hopescroll',
      })
    }

    return { stars, planes, satellites, appLogos }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const setupCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
    }

    setupCanvas()
    objectsRef.current = createObjects(window.innerWidth, window.innerHeight)

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
      gradient.addColorStop(0, '#000000')
      gradient.addColorStop(1, '#001845')
      return gradient
    }

    let backgroundGradient = createGradient()

    let resizeTimeout: NodeJS.Timeout | null = null
    const resizeCanvas = () => {
      if (resizeTimeout) return
      resizeTimeout = setTimeout(() => {
        setupCanvas()
        objectsRef.current = createObjects(window.innerWidth, window.innerHeight)
        backgroundGradient = createGradient()
        resizeTimeout = null
      }, 200)
    }

    const snapshotImg = new Image()
    snapshotImg.src = "/snapshot-icon-256x256.png"
    snapshotImageRef.current = snapshotImg

    const hopescrollImg = new Image()
    hopescrollImg.src = "/hopescroll-icon-256x256.png"
    hopescrollImageRef.current = hopescrollImg

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const logo = hitTestLogos(
        objectsRef.current.appLogos,
        event.clientX - rect.left,
        event.clientY - rect.top,
      )
      if (logo) {
        const url = logo.appType === 'snapshot'
          ? 'https://apps.apple.com/us/app/snapshot-screenshot-to-text/id6754900482?mt=12'
          : 'https://apps.apple.com/us/app/hopescroll-daily-motivation/id6755077908'
        window.open(url, '_blank')
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const hit = hitTestLogos(
        objectsRef.current.appLogos,
        event.clientX - rect.left,
        event.clientY - rect.top,
      )
      canvas.style.cursor = hit ? 'pointer' : 'default'
    }

    canvas.addEventListener('click', handleCanvasClick)
    canvas.addEventListener('mousemove', handleMouseMove)
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      frameCountRef.current++
      const frameCount = frameCountRef.current
      const width = window.innerWidth
      const height = window.innerHeight
      const { stars, planes, satellites, appLogos } = objectsRef.current

      ctx.fillStyle = backgroundGradient
      ctx.fillRect(0, 0, width, height)

      // Stars
      for (const star of stars) {
        const opacity = star.opacity + Math.sin(frameCount * star.twinkleSpeed + star.twinkleOffset) * 0.2
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, TWO_PI)
        ctx.fill()
      }

      // Planes
      ctx.fillStyle = "#ffffff"
      for (const plane of planes) {
        plane.x += plane.speed * plane.direction

        if ((plane.direction > 0 && plane.x > width + 10) || (plane.direction < 0 && plane.x < -10)) {
          plane.x = plane.direction > 0 ? -10 : width + 10
          plane.y = Math.random() * (height / 2)
        }

        ctx.beginPath()
        ctx.rect(plane.x - 3, plane.y - 1, 6, 2)
        ctx.fill()

        ctx.beginPath()
        ctx.rect(plane.x - 1, plane.y - 3, 2, 6)
        ctx.fill()

        if ((frameCount + plane.blinkOffset) % plane.blinkInterval < plane.blinkInterval / 2) {
          ctx.fillStyle = "#ff0000"
          ctx.beginPath()
          ctx.arc(plane.x + (plane.direction > 0 ? 3 : -3), plane.y, 1, 0, TWO_PI)
          ctx.fill()
          ctx.fillStyle = "#ffffff"
        }
      }

      // Satellites
      ctx.fillStyle = "#aaccff"
      for (const satellite of satellites) {
        satellite.x += satellite.speed * satellite.direction

        if (
          (satellite.direction > 0 && satellite.x > width + 10) ||
          (satellite.direction < 0 && satellite.x < -10)
        ) {
          satellite.x = satellite.direction > 0 ? -10 : width + 10
          satellite.y = Math.random() * (height / 3)
        }

        ctx.beginPath()
        ctx.rect(satellite.x - 2, satellite.y - 1, 4, 2)
        ctx.fill()

        ctx.fillStyle = "#88aaff"
        ctx.beginPath()
        ctx.rect(satellite.x - 4, satellite.y, 8, 1)
        ctx.fill()
        ctx.fillStyle = "#aaccff"
      }

      // App logos
      const snapshotLogoImg = snapshotImageRef.current
      const hopescrollLogoImg = hopescrollImageRef.current

      for (const logo of appLogos) {
        logo.x += logo.speed * logo.direction

        if (
          (logo.direction > 0 && logo.x > width + logo.size) ||
          (logo.direction < 0 && logo.x < -logo.size)
        ) {
          logo.x = logo.direction > 0 ? -logo.size : width + logo.size
          logo.y = Math.random() * height
        }

        const logoImg = logo.appType === 'snapshot' ? snapshotLogoImg : hopescrollLogoImg
        if (logoImg && logoImg.complete) {
          ctx.save()
          ctx.globalAlpha = 0.9
          ctx.drawImage(
            logoImg,
            logo.x - logo.size / 2,
            logo.y - logo.size / 2,
            logo.size,
            logo.size,
          )
          ctx.restore()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

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
