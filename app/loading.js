import styles from './style.module.scss';

export default function Loading() {
    return (
        <div className="loading-wrap w-full h-screen">
            <div className={styles.container}>
                <div className={`${styles.dot} ${styles.dot1} z-10`}></div>
                <div className={`${styles.dot} ${styles.dot2}`}></div>
                <div className={`${styles.dot} ${styles.dot3}`}></div>
            </div>
            <div className="top-0 blur-sm absolute bg-gray-50/50 w-full h-full"></div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}