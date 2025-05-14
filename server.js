const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// إعداد الميدل وير
app.use(cors());
app.use(bodyParser.json());

// إعداد nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // استبدل بـ بريدك الإلكتروني
        pass: "your-email-password"  // استبدل بـ كلمة المرور
    }
});

// إرسال البريد الإلكتروني
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "mmostafaa495@gmail.com",
        subject: "رسالة جديدة من نموذج الاتصال",
        text: `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("حدث خطأ أثناء إرسال البريد الإلكتروني.");
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("تم إرسال البريد الإلكتروني بنجاح.");
        }
    });
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});