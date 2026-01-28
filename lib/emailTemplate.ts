interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const generateEmailHTML = ({ name, email, subject, message }: EmailTemplateProps) => {
  return `
    <div style="font-family: Poppins, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #BD2667; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">New Message Received</h2>
      </div>
      <div style="padding: 20px;">
        <p><strong>From:</strong> ${name} (<a style="color: #BD2667" href="mailto:${email}">${email}</a>)</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #BD2667;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
      </div>
      <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777 italic;">
        Sent from your Portfolio Site
      </div>
    </div>
  `;
};