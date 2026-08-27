"use client";

import { useEffect } from "react";
import styles from "./status.module.css";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className={styles.screen}><p className={styles.brand}>ETERNAL<br />PHILOSOPHY</p><p className={styles.index}>ERROR / SYSTEM</p><h1 className={styles.message}>SOMETHING<br />WENT WRONG.</h1><button className={styles.action} type="button" onClick={reset}>TRY AGAIN →</button></main>;
}
