import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, organization, telephone, email, eventType, eventDate, message } = req.body;

  if (!name || !telephone || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"The Event Studio Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Enquiry from ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="border-bottom: 2px solid #D4AF37; padding-bottom: 12px; color: #1a1a1a;">
          New Event Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Organization</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${organization || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${telephone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Event Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${eventType || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Event Date</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${eventDate || "Not specified"}</td>
          </tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="font-weight: bold; margin-bottom: 8px;">Message</p>
          <p style="background: #f9f9f9; padding: 16px; border-left: 3px solid #D4AF37; line-height: 1.7; margin: 0;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
        <p style="margin-top: 32px; font-size: 12px; color: #999;">
          Sent via The Event Studio website — Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
