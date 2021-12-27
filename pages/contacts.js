import styles from "../styles/Contacts.module.css";
import HomeLeft from '../components/HomeLeft';
import ContactContent from "../components/ContactsContent";

const Contact=()=>{
    return(
        <div className={styles.container}>
            <HomeLeft />
            <ContactContent />
        </div>
    );
}

export default Contact;