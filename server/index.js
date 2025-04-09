import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "全項目必須です" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `お問い合わせ from ${name}`,
      text: message,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    res.status(500).json({ success: false, error: "メール送信に失敗しました" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
