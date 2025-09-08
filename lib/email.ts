/**
 * Client-side email implementation for TheXone landing page using EmailJS REST API
 * This implementation uses the EmailJS REST API for client-side email sending
 */

// EmailJS configuration
// In a real application, these would be environment variables
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'hflzN1h002utKVcG4'; // Replace with your EmailJS public key (user_id)

// Define email options interface
export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

/**
 * Send an email using EmailJS REST API
 * @param options Email options including to, subject, and html content
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
  const { to, subject, html, from = 'adeyemis958@gmail.com' } = options;

  try {
    // Prepare template parameters (must match your EmailJS template variables)
    const templateParams = {
      to_email: to,
      from_name: 'TheXone Team',
      to_name: to.split('@')[0], // Use the part before @ as name
      subject: subject,
      message_html: html,
      reply_to: from,
    };

    // Call EmailJS REST API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY, // EmailJS public key (user_id)
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`EmailJS request failed: ${response.status} - ${errorText}`);
    }

    console.log('✅ Email sent successfully via EmailJS REST API');
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw new Error(
      `Failed to send email: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

/**
 * Generate a thank you email template with TheXone branding
 * @param name Recipient's name
 * @param whatsappLink Link to the WhatsApp group
 * @returns HTML email template
 */
export function generateThankYouEmailTemplate(name: string, whatsappLink: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to TheXone Waitlist!</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #eaeaea;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #10b981; /* Emerald primary color */
        }
        .content {
          padding: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px 0;
          color: #666;
          font-size: 12px;
          border-top: 1px solid #eaeaea;
        }
        .button {
          display: inline-block;
          background-color: #10b981;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 15px;
        }
        h1 {
          color: #10b981;
          margin-top: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">TheXone</div>
        </div>
        <div class="content">
          <h1>Welcome to TheXone!</h1>
          <p>Hello ${name},</p>
          <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
          <p>We're working hard to build something amazing, and we'll notify you as soon as we launch.</p>
          <p>In the meantime, join our WhatsApp community to stay updated and connect with like-minded individuals:</p>
          <p><a href="${whatsappLink}" class="button">Join TheXone WhatsApp Group</a></p>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br>The TheXone Team</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} TheXone. All rights reserved.</p>
          <p>You're receiving this email because you signed up for TheXone waitlist.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
