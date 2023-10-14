import React, { useState } from "react";
import Navbar from "../misc/Navbar/Navbar";
import Sidebar from "../misc/Sidebar/Sidebar";
import emailjs from "@emailjs/browser";

import {
  ContactMeContiner,
  ContactMeTitle,
  ContactMeFormInput,
  ContactMeFormTextArea,
  ContactMeFormInputContiner,
  SubmintButton,
} from "./ContactMeElems";

export default function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(email, name, message);
    if (email === "" || name === "" || message === "") {
      console.log("Please fill out all fields");
      return;
    }

    const emailPerms = {
      email,
      name,
      message,
    };
    emailjs
      .send(
        "service_00wz65h",
        "template_n909tcw",
        emailPerms,
        "ZfLlsj6U4Ni4sIYfD"
      )
      .then(
        () => {
          window.location.href = "/";
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ContactMeContiner>
        <ContactMeTitle>
          Thanks for taking the time to reach out. How can I help you today?
        </ContactMeTitle>

        <ContactMeFormInputContiner>
          <ContactMeFormInput
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <ContactMeFormInput
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YourEmail@gmail.com"
          />
        </ContactMeFormInputContiner>
        <ContactMeFormTextArea
          rows={5}
          cols={window.innerWidth <= 768 ? 20 : 40}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <SubmintButton type="submit" onClick={sendEmail}>
          Submint
        </SubmintButton>
      </ContactMeContiner>
    </>
  );
}
