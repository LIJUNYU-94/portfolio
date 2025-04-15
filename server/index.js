import "dotenv/config";
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
  console.log("🔍 process.env dump:", process.env);
  console.log("🟡 読み込んだGmailアドレス:", process.env.EMAIL_USER);
  console.log("🟡 パスワード長さ:", process.env.EMAIL_PASS?.length);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true, // これで送信ステータス見える
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `お問い合わせ from ${name}`,
      text: `メール：${email} 、問い合わせ内容：${message}`,
    });
    // ユーザーに送る自動返信メール
    await transporter.sendMail({
      from: "no-reply@example.com",
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます",
      html: `<p>${name} 様、</p>
      <p>この度はお問い合わせいただきありがとうございます。</p>
      <p>以下の内容で受け付けいたしました。</p>
      <hr>
      <p><strong>お名前:</strong> ${name}</p>
      <p><strong>メールアドレス:</strong> ${email}</p>
      <p><strong>メッセージ:</strong><br>${message}</p>
      <hr>
      <p>内容を確認のうえ、折り返しご連絡させていただきます。</p>
      <p>どうぞよろしくお願いいたします。</p>
      <p>※このメールは自動送信です。</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    res.status(500).json({ success: false, error: "メール送信に失敗しました" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
