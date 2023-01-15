import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return (
        <form
            action={"https://getform.io/f/f3718d19-2852-4653-8340-95603799673c"} 
            method={"POST"}
            className={styles.contactForm}
        >
            <label> Name </label>
            <input
                type={"text"} 
                required={true} 
                placeholder={"Enter Your Name "}
                name={"name"}
            />
            <label> Email </label>
            <input 
                type={"email"} 
                required={true} 
                placeholder={"Enter Your Email "}
                name={"email"}
            />
            <label> Message </label>
            <textarea 
                required={true} 
                placeholder={"Enter Your Message "} 
                name={"message"}
            />
            <button type={"submit"} value={"Send"}> Send </button>
        </form>
    )
}

export default ContactForm;