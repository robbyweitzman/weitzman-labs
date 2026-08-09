import type { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Weitzman Labs",
  description: "Apps by Weitzman Labs LLC.",
}

const APPS = [
  {
    name: "Tiramisu",
    description:
      "Log, rank, and map every tiramisu you eat. Follow friends to find the best slice.",
    icon: "/tiramisu-icon-256x256.png",
    url: "https://trytiramisu.vercel.app/",
  },
  {
    name: "Dictionary",
    description: "The whole dictionary, offline.",
    icon: "/dictionary-icon-256x256.png",
    url: "https://dictionary-offline.vercel.app/",
  },
  {
    name: "Hug",
    description:
      "Send friends virtual hugs. You never know when someone needs a hug.",
    icon: "/hug-icon-256x256.png",
    url: "https://sendahug.app/",
  },
  {
    name: "HopeScroll",
    description:
      "Don't doomscroll, HopeScroll. Find inspiring quotes from history.",
    icon: "/hopescroll-icon-256x256.png",
    url: "https://tryhopescroll.vercel.app/",
  },
  {
    name: "Snapshot",
    description:
      "Screenshot text → copy to clipboard, instantly. All done locally.",
    icon: "/snapshot-icon-256x256.png",
    url: "https://trysnapshot.vercel.app/",
  },
] as const

export default function AppsPage() {
  return (
    <main className={styles.page} data-theme="cream">
      <div className={styles.inner}>
        <h1 className={styles.title}>Weitzman Labs</h1>

        <div className={styles.list}>
          {APPS.map((app) => (
            <a
              key={app.name}
              className={styles.row}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.icon}
                src={app.icon}
                alt=""
                width={256}
                height={256}
              />
              <div>
                <h2 className={styles.name}>{app.name}</h2>
                <p className={styles.description}>{app.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
