'use client'
import styles from './page.module.css'
import {MultiForm} from "@/components/MultiForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <MultiForm></MultiForm>
    </main>
  )
}
