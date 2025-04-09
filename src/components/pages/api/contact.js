// /pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "全項目必須です" });
  }

  // Gmailなどで送る場合（事前に環境変数が必要）
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Gmailアドレス
      pass: process.env.EMAIL_PASS, // Gmailアプリパスワード
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `お問い合わせ from ${name}`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "メール送信に失敗しました" });
  }
}
