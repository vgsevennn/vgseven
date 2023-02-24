import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

import { db } from "@/components/Firebase/FirebaseConfig";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const CollectionRef = collection(db, "Contacts");

  const formHandler = (e: any) => {
    e.preventDefault();

    addDoc(CollectionRef, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        alert("Thanks for contacting us, I'll reach you as sson as possible..");
      })
      .catch((err) => {
        alert(err.message);
      });

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <form
      id={"emailForm"}
      onSubmit={formHandler}
      className={styles.contactForm}
    >
      <label> Name </label>
      <input
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        required={true}
        placeholder={"Enter Your Name "}
        name={"name"}
        value={name}
      />
      <label> Email </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type={"email"}
        required={true}
        placeholder={"Enter Your Email "}
        name={"email"}
        value={email}
      />
      <label> Message </label>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        required={true}
        placeholder={"Enter Your Message "}
        name={"message"}
        value={message}
      />
      <button type={"submit"} value={"Send"}>
        Send
      </button>
    </form>
  );
}
