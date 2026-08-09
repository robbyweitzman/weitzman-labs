'use client'

import { useEffect } from 'react'
import styles from './message.module.css'

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
      {/* global-error replaces the root layout, so globals.css and its reset
          never load here — zero the default body margin by hand. */}
      <body style={{ margin: 0 }}>
        <main className={styles.page} data-theme="cream">
          <h1 className={styles.code}>Server Error</h1>
          <p className={styles.message}>Something went wrong on our server</p>
          <div className={styles.actions}>
            <button onClick={reset} className={styles.button}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
