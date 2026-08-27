import styles from "./status.module.css";

export default function Loading() {
  return <main className={styles.loading} aria-label="Loading"><div className={styles.loadingInner}><span>LOADING</span><span className={styles.line} /></div></main>;
}
