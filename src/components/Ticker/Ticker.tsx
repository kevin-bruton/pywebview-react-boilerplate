import { usePythonState } from '../../hooks/pythonBridge'

import styles from './Ticker.module.css'

export default function Ticker() {
  const ticker = usePythonState('ticker')

  return (
    <div className={styles.tickerContainer}>
      <h1 className={styles.title}>Welcome to pywebview!</h1>

      <em className={styles.details}>You can freely communicate between Javascript with Python without a HTTP server. This value, for example, is being generated by Python code:</em>
      <strong>{ ticker }</strong>
    </div>
  )
}
