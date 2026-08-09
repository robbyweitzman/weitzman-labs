import Link from 'next/link'
import styles from './message.module.css'

export default function NotFound() {
  return (
    <main className={styles.page} data-theme="cream">
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Page not found</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.link}>
          Return home
        </Link>
      </div>
    </main>
  )
}
