import { NextResponse } from "next/server";
import { generateEmailHTML } from "@/lib/emailTemplate";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Create a transporter (using Gmail as an example)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Setup email data
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: generateEmailHTML({ name, email, subject, message }), // Use the imported function
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: "Email sent successfully"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
            error: "Failed to send email"
        }, {
            status: 500
        });
    }
}