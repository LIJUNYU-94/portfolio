import React, { useState } from "react";
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      //***php */
      // const res = await fetch("http://localhost:8000/src/backend/contact.php", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: form.name,
      //     email: form.email,
      //     message: form.message,
      //   }),
      // });
      //***next.js */
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: form.name,
      //     email: form.email,
      //     message: form.message,
      // });
      //***express */
      const res = await fetch(
        "https://portfolio-production-7677.up.railway.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );
      const result = await res.json();
      console.log("result:", result);
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      <h1>Contact</h1>
      <p className="contact-text">
        このサイトを通して、 <br className="sp-only" />
        私のことを少しでも知っていただければ嬉しいです。
        <br className="sp-only" />{" "}
        もしこのサイトや私について何か気になることがありましたら、{" "}
        <br className="sp-only" />
        下記フォームをご利用ください。
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="お名前"
          value={form.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={form.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          value={form.message}
          onChange={handleChange}
          required
          className="form-textarea"
        />
        <button
          type="submit"
          className="form-button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "送信中..." : "送信"}
        </button>
        {status === "success" && (
          <p className="form-success">
            ありがとうございます！確認でき次第、返信させていただきます
          </p>
        )}
        {status === "error" && (
          <p className="form-error">送信に失敗しました。</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
