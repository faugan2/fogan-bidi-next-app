import styles from "../styles/HomeLeft.module.css";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
const HomeLeft=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src="/photo.jpg" width={100} height={100} className={styles.photo} />
                <div className={styles.name}>Fogan BIDI</div>
                <div className={styles.top_info}>Web and Mobile Developper,</div>
                <div className={styles.top_info}>AI and ethical hacking enthusiast,</div>
                <div className={styles.top_info}>Author and web dev Teacher.</div>
            </div>

            <div className={styles.line}>
                <EmailIcon />
                <label className={styles.detail}>foganbidi2@gmail.com</label>
            </div>

            <div className={styles.line}>
                <WhatsAppIcon />
                <label className={styles.detail}>+228 92 95 08 03</label>
            </div>

            <div className={styles.line}>
                <PlaceIcon />
                <label className={styles.detail}>Lomé - TOGO</label>
            </div>

            <div className={styles.line}>
                <LanguageIcon />
                <label className={styles.detail}>English - French</label>
            </div>
        </div>
    );
}
export default HomeLeft;