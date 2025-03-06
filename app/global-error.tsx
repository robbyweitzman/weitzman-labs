'use client'

import { useEffect } from 'react'
import styles from './page.module.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <div className={styles.canvas}></div>
          <div style={{ zIndex: 2, textAlign: 'center' }}>
            <h1 className={styles.title}>Server Error</h1>
            <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.2rem' }}>
              Something went wrong on our server
            </p>
            <button
              onClick={reset}
              style={{
                background: 'white',
                color: 'black',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '2rem',
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
} 