import Link from 'next/link';
import styles from '../styles/custom404.module.css'; // If you want to add styles with CSS Modules

export default function Custom404() {
    return (
        <div className={styles.errorContainer}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link href="/">
                Go back home
            </Link>
        </div>
    );
}