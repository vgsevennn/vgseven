import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

import { db } from "@/components/Firebase/FirebaseConfig";
import styles from "./UpdatesForm.module.scss";

export default function UpdatesForm() {
  const [email, setEmail] = useState(" ");

  const CollectionRef = collection(db, "UpdatesForm");

  const emailHandler = (e: any) => {
    e.preventDefault();

    addDoc(CollectionRef, {
      email: email,
    })
      .then(() => {
        alert(
          "Thanks for Joining, Now you'll receive the notification for every new update.."
        );
      })
      .catch((err) => {
        alert(err.message);
      });
    setEmail('');
  };
  return (
    <form
      id={"emailForm"}
      className={styles.updateForm}
      onSubmit={emailHandler}
    >
      <label> Get Updates from VGSEVEN &rarr; </label>
      <input
        type={"email"}
        placeholder={"Enter your email "}
        required={true}
        name={"EmailID"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type={"submit"} value={"Submit"}>
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}
