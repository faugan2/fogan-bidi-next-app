import Styles from "../styles/Projets.module.css";
import Head from "next/head";
import HomeLeft from "../components/HomeLeft";
import ProjetContent from "../components/ProjetContent";
const Projet=()=>{
    return(
        <div className={Styles.container}>
             <Head>  
                <title>Projects</title>
                <meta charset="utf-8" />
            </Head>
            <HomeLeft />
            <ProjetContent />
        </div>
    );
}
export default Projet;