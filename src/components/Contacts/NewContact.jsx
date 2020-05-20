import React, { useState } from "react";
import styles from "./NewContact.module.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
function NewContact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact }),
    })
      .then(() => alert("Thank You!"))
      .catch((error) => alert(error));

    e.preventDefault();
    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <>
      <p>Contact me</p>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label className="inputLabel">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={handleChange}
                className="contactInput"
              />
            </label>
          </p>
          <p>
            <label className="inputLabel">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                className="contactInput"
              />
            </label>
          </p>
          <p>
            <label className="inputLabel">
              <textarea
                name="message"
                placeholder="Message"
                value={contact.message}
                onChange={handleChange}
                className="contactInputMessage"
              />
            </label>
          </p>
          <p className="submitBtn">
            <button>Send</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default NewContact;
