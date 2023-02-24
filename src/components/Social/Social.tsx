import "@flaticon/flaticon-uicons/css/brands/all.css";

import styles from "./Social.module.scss";

export default function Social() {
  return (
    <div className={styles.social}>
      <a href="https://www.github.com/vgsevennn" target={"_blank"}>
        <i className="fi fi-brands-github" style={{ fontSize: "25px" }}></i>
      </a>

      <a href="https://www.instagram.com/vgsevenn" target={"_blank"}>
        <i className="fi fi-brands-instagram" style={{ fontSize: "25px" }}></i>
      </a>

      <a href="https://www.twitter.com/vgsevenn" target={"_blank"}>
        <i className="fi fi-brands-twitter" style={{ fontSize: "25px" }}></i>
      </a>

      <a href={"mailto:mailteamseven@gmail.com"} target={"_blank"}>
        <i className="fi fi-brands-google" style={{ fontSize: "25px" }}></i>
      </a>

      <a href="https://www.linkedin.com/in/vgseven" target={"_blank"}>
        <i className="fi fi-brands-linkedin" style={{ fontSize: "25px" }}></i>
      </a>

      <a href="https://www.youtube.com/@vgseven" target={"_blank"}>
        <i className="fi fi-brands-youtube" style={{ fontSize: "25px" }}></i>
      </a>
    </div>
  );
}
