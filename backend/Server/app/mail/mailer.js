const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nitrotech.org@gmail.com',
        pass: 'ujvk cxer grlz tjdt'
    }
});

router.post("/mail", (req, res) => {
    const pdfPath = 'C:/Users/Abhiman/Downloads/invoice.pdf'; // Replace this with the actual path to your PDF file
    
    const {recipientEmail} = req.body; 

   
    if (!recipientEmail) {
        return res.status(400).send("Recipient email is required");
    }
console.log("please wait.....!")
    // Attach PDF to email
    transporter.sendMail({
        from: 'NiTROTECH ',
        to: recipientEmail,
        subject: 'Invoice from NiTROTECH',
        html: `
        <p>Dear Customer,</p>
        <p>Thank you for choosing to shop with us! We appreciate your patronage.</p>
        <p>Attached to this email, you'll find the invoice for your recent purchase. If you have any questions or concerns regarding your order, feel free to reach out to our customer support team.</p>
        <p>We hope you're satisfied with your purchase and look forward to serving you again in the future.</p>
        <p>Best Regards,</p>
        <p>NiTROTECH Team</p>
    `,
        
        attachments: [
            {
                filename: 'invoice.pdf',
                path: pdfPath
            }
        ]
    }, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
            res.status(500).send("Error sending email");
        } else {
            console.log('Email sent successfully:', info.response);
            res.send("Email sent successfully");
        }
    });
});

module.exports = router;
