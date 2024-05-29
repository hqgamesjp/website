export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

    // お問い合わせ元に対する返信内容
    const msg_reply = {
      to: req.body.email,
      from: {
        name: "HQ Games",
        email: process.env.CONTACT_EMAIL_FROM,
      },
      subject: "【HQ Games】お問合せありがとうございました。",
      text: [
        req.body.name + " 様",
        "",
        "Head Quarter Gamesです。",
        "お問い合わせいただきありがとうございます。",
        "",
        "1~3営業日以内を目安にご返信いたしますのでお待ちくださいませ。",
      ].join("\n"),
    };

    // HQGames担当者への通知内容
    const msg_notification = {
      to: process.env.CONTACT_EMAIL_NOTIFICATION,
      from: {
        name: "HQ Games フォーム通知",
        email: process.env.CONTACT_EMAIL_FROM,
      },
      subject: "【HQ Games】通知：お問い合わせフォームに投稿あり",
      text: [
        "お名前：" + req.body.name,
        "会社名：" + req.body.company,
        "メールアドレス：" + req.body.email,
        "件名：" + req.body.subject,
        "お問い合わせ内容：" + req.body.message,
      ].join("\n"),
    };

    // お問い合わせ元に対する返信
    (async () => {
      try {
        await sgMail.send(msg_reply);
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();

    // HQGames担当者への通知
    (async () => {
      try {
        await sgMail.send(msg_notification);
        console.log(msg_notification);
      } catch (error: any) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
