import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  phone?: string;
  service?: string;
  description?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service, description } = (await req.json()) as ContactPayload;

    // Check if all necessary fields are provided
    if (!name || !phone || !service) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create the transporter object using the Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail ID
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // To avoid SSL certificate issues
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: "singhvishalkumar412@gmail.com", // Replace with your actual email
      subject: "New Technician Booking Request",
      text: `
        Name: ${name}
        Phone: ${phone}
        Service: ${service}
        Description: ${description || "No description provided"}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // If email is sent successfully, return a success response
    if (info.accepted.length > 0) {
      return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

  } catch (error) {
    console.error("Error while sending email:", error); // Log the error for debugging
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
