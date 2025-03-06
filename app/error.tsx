'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Error({
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
    <main className={styles.main}>
      <div className={styles.canvas}></div>
      <div style={{ zIndex: 2, textAlign: 'center' }}>
        <h1 className={styles.title}>Error</h1>
        <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.2rem' }}>
          Something went wrong
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={reset}
            style={{
              background: 'white',
              color: 'black',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '1rem',
            }}
          >
            Try again
          </button>
          <Link href="/" style={{ 
            color: 'white', 
            textDecoration: 'underline',
            fontSize: '1rem'
          }}>
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
} 