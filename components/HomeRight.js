
import styles from "../styles/HomeRight.module.css";
import Link from "next/link";

const HomeRight=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h2 className={styles.about_title}>About Me</h2>
                <p>
                    I am a web developper from Togo. I enjoy building everything from small business sites 
                    to rich interactives web apps. 
                </p>
                <p>
                    More than just a website, I build a tool to increase sales, leads. 
                    A tool that will establish your online presence and make it easy for prospects to find your business.
                </p>
                <p>
                    If you are a business seeking a web presence or an employer looking to hire,
                    you can get in touch with me by clicking the button bellow. 
                </p>
                <div className={styles.zone_btn}>
                    <Link href="/contacts"><a  className={styles.btn_contact}>Reach Out To Me</a></Link>
                </div>
                
            </div>


            <div className={styles.about}>
                <h2 className={styles.about_title}>Ways that I can help</h2>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <img src="/webdev.png" layout="responsive" className={styles.skill_img} />
                        <h3>Web Development</h3>
                    </div>
                    <div className={styles.skill}>
                        <img src="/mobiledev.png"  layout="responsive" className={styles.skill_img} />
                        <h3>Mobile Development</h3>
                    </div>
                    <div className={styles.skill}>
                        <img src="/desktopdev.png" layout="responsive" className={styles.skill_img} />
                        <h3>Desktop Development</h3>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
export default HomeRight;