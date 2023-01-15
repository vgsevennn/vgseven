import Image from "next/image";

import styles from "./Social.module.css";

import instagram from "../../public/social/instagram.png";
import twitter from "../../public/social/twitter.png";
import medium from "../../public/social/medium.png";
import mail from "../../public/social/email.png";
import linkedin from "../../public/social/linkedin.png";

const Social = () => {
  return (
    <>
        <h3> Follow on Social : - </h3>
            <a 
                href="https://www.instagram.com/vgsevenn" 
                target={"_blank"} > 
                <Image 
                    src={instagram} 
                    alt={"instagram"}
                    width={"40"}
                    height={"40"}
                    className={styles.social}
                />
            </a>
        
            <a
                href="https://www.twitter.com/VGSevenn"
                target={"_blank"}>
                <Image
                    src={twitter}
                    alt={"twitter"}
                    width={"45"}
                    height={"45"}
                    className={styles.social}
                />
            </a>
            <a
                href="https://vgseven.medium.com"
                target={"_blank"}>
                <Image
                    src={medium}
                    alt={"medium"}
                    width={"40"}
                    height={"40"}
                    className={styles.social}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/vgseven"
                target={"_blank"}
            >
                <Image
                    src={linkedin}
                    alt={"linkedin"}
                    width={"40"}
                    height={"40"}
                    className={styles.social}
                />
            </a>
            <a
                href="mailto:mailteamseven@gmail.com"
                target={"_blank"}>
                <Image
                    src={mail}
                    alt={"email"}
                    width={"40"}
                    height={"40"}
                    className={styles.social}
                />
                </a>
    </>
  );
};

export default Social;
