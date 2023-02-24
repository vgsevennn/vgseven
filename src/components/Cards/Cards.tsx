import Link from "next/link";

import styles from "./Cards.module.scss";

export default function Cards(props: any) {
  return (
    <div className={styles.main}>
      <div className={styles.sections}>
        <Link href={props.Link} className={styles.cards}>
          <h3> {props.Title} </h3>
          <span> {props.Tag} </span>
          <p> {props.Description} </p>
          &rarr;
        </Link>
      </div>
    </div>
  );
}
