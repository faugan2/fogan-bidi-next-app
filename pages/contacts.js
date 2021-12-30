import styles from "../styles/Contacts.module.css";
import HomeLeft from '../components/HomeLeft';
import ContactContent from "../components/ContactsContent";
import Head from "next/head";
const Contact=()=>{
    return(
        <div className={styles.container}>
             <Head>  
        <title>Contacts</title>
        <meta charset="utf-8" />
      </Head>
            <HomeLeft />
            <ContactContent />
        </div>
    );
}

export default Contact;