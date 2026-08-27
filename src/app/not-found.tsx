import Link from "next/link";
import styles from "./status.module.css";

export default function NotFound() {
  return <main className={styles.screen}><p className={styles.brand}>ETERNAL<br />PHILOSOPHY</p><p className={styles.index}>404 / NOT FOUND</p><h1 className={styles.message}>NOTHING<br />EXISTS HERE.</h1><Link className={styles.action} href="/">BACK HOME →</Link></main>;
}
