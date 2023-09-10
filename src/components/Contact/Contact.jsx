"use client";
import "./Contact.scss";

export default function Contact() {
  const sendForm = (e) => {
    e.preventDefault();
    console.log("sending form");

    const formData = new FormData(e.target);
    const message = Object.fromEntries(formData);
    console.log(message);
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Coctact me</h2>
      <p className="contact__title">I would love to work with you 👀</p>
      <form className="contact__form" onSubmit={sendForm}>
        <input
          className="contact__input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="contact__input"
          type="email"
          placeholder="Email address"
          name="email"
        />
        <textarea
          className="contact__input --large"
          type="text"
          placeholder="Tell me, how can I help you?"
          name="message"
        />
        <button className="contact__btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
