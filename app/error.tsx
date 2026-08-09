'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './message.module.css'

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
    <main className={styles.page} data-theme="cream">
      <h1 className={styles.code}>Error</h1>
      <p className={styles.message}>Something went wrong</p>
      <div className={styles.actions}>
        <button onClick={reset} className={styles.button}>
          Try again
        </button>
        <Link href="/" className={styles.link}>
          Return home
        </Link>
      </div>
    </main>
  )
}
