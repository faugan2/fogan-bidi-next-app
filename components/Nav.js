import styles from "../styles/Nav.module.css";
import Link from "next/link";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
const Nav=()=>{
    return(
        <div className={styles.container}>
            <div>
                <DeveloperModeIcon />
            </div>
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/projets">Projets</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
                
            </ul>
        </nav>
        </div>
    );
}

export default Nav;