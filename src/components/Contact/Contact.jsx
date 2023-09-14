"use client";
import { Toaster, toast } from "sonner";
import { sendMessage } from "@firebase/firebase.js";
import "./Contact.scss";

export default function Contact() {
  const sendForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const message = Object.fromEntries(formData);
    sendMessage(message)
    toast.success("Message sent successfully✨");
  };

  return (
    <div className="contact">
      <p className="contact__title">I would love to work with you 👀</p>
      <form className="contact__form" onSubmit={sendForm}>
        <input
          className="contact__input"
          type="text"
          name="name"
          placeholder="Name"
          maxLength="100"
        />
        <input
          className="contact__input"
          type="email"
          placeholder="Email address"
          name="email"
          maxLength="100"
          required
        />
        <textarea
          className="contact__input --large"
          type="text"
          placeholder="Tell me, how can I help you?"
          name="message"
          maxLength="2000"
          required
        />
        <button className="contact__btn" type="submit">
          Send
        </button>
      </form>
      <Toaster
        toastOptions={{
          style: { background: "#3ea772d5", color: "#d7e2f3", border: "none" },
        }}
      />
    </div>
  );
}
