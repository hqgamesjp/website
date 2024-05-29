// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();

// app.use(express.json());

// app.post("/api/send", async (req, res) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       // トランスポートの設定 (例: SMTP)
//     });

//     await transporter.sendMail({
//       from: "info@yourwebsite.com",
//       to: "担当者メールアドレス",
//       subject: "お問い合わせフォームからのメッセージ",
//       text: `
//         名前: なまえ
//         メールアドレス: sugarwarsworks@gmail.com
//         メッセージ: message
//         // 名前: ${req.body.name}
//         // メールアドレス: ${req.body.email}
//         // メッセージ: ${req.body.message}
//       `,
//     });

//     res.json({ message: "Success" });
//   } catch (error) {
//     console.error("メールの送信中にエラーが発生しました:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.listen(3000);
