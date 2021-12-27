import styles from "../styles/ProjetContent.module.css";
import Link from "next/link";

const ProjetContent=()=>{
    return (
        <div className={styles.container}>
           <div className={styles.project}>
               <h2 className={styles.project_title}>3HLP</h2>
               <p>
                   3 months Heigh Level Programming (3HLP) is a project that i started in june 2021 to help 
                   anyone intrested in developping web apps to acquire the technical skills needed to start developping 
                   their web apps in just 3 months of training.
               </p>
               <p>
                    The first training section is a huge success, bellow some pictures:
               </p>
               <div className={styles.line_image}>
                    <div className={styles.image_item}>
                        <img src="/projects/4.jpg" width="100" height="80" layout="responsive" />
                    </div>
                    <div className={styles.image_item}>
                        <img src="/projects/2.jpg" width="100" height="80" layout="responsive" />
                    </div>
                    <div className={styles.image_item}>
                        <img src="/projects/3.jpg" width="100" height="80" layout="responsive" />
                    </div>
               </div>
           </div>

           <div className={styles.project}>
               <h2 className={styles.project_title}>My Books</h2>
                <div className={styles.projet_content}>
               <p>
                   I wrote so far two books in web developpement around Javascript:
                   
                   <ol className={styles.books_list}>
                        <li className={styles.book_item}>The first one covers the main skills 
                   needed to start creating applications with vanilla Javascript and Firebase as back-end service.
                   </li>

                   <li className={styles.book_item}>
                       The second books demonstrate how far we can with nodeJS based on the Javascript knowlegde from 
                       the first book. And in this book, we can deal with other database systems like MYSQL and MongoDB.
                   </li>
                    </ol>

                  
                   
               </p>
               <div className={styles.books}>
                        <img src="/projects/5.jpg" width="200" height="200" layout="responsive" />
                </div>
                </div>
           </div>

           <div className={styles.project}>
               <h2 className={styles.project_title}>My Video Courses</h2>
               <p>
                   I post videos on my free time on <Link href="https://hlpvideo.web.app/" target="_blank">
                       <a target="_blank" style={{color:"indianred"}}>hlpvideos</a></Link> to help web developpers.<br />
                   I am also planning to make an online training here aswell.
               </p>

               <div>Visit now <Link href="https://hlpvideo.web.app/"><a target="_blank" style={{color:"indianred"}}>https://hlpvideo.web.app/</a></Link> </div>
            </div>
        </div>
    );
}
export default ProjetContent;