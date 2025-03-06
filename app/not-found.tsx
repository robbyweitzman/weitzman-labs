import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.canvas}></div>
      <div style={{ zIndex: 2, textAlign: 'center' }}>
        <h1 className={styles.title}>404</h1>
        <p style={{ color: 'white', marginTop: '1rem', fontSize: '1.2rem' }}>
          Page not found
        </p>
        <Link href="/" style={{ 
          color: 'white', 
          marginTop: '2rem', 
          display: 'inline-block',
          textDecoration: 'underline',
          fontSize: '1rem'
        }}>
          Return Home
        </Link>
      </div>
    </main>
  )
} 