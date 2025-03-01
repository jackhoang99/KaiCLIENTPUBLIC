import { FormData } from '../types/contact';

export const sendContactEmail = (formData: FormData) => {
  const subject = formData.firstName || formData.lastName
    ? `Contact Form Submission from ${formData.firstName} ${formData.lastName}`.trim()
    : 'Contact Form Submission';

  const body = `
${formData.firstName || formData.lastName ? `Name: ${formData.firstName} ${formData.lastName}`.trim() : ''}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}

Message:
${formData.message}
  `.trim();

  window.location.href = `mailto:kailagreestudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const openInstructorEmail = () => {
  const subject = 'Instructor Certification Inquiry';
  const body = `Hi,

I'm interested in learning more about becoming a certified instructor at KAI Lagree Studio.

Please provide me with information about:
- Certification requirements
- Training schedule
- Program costs
- Available positions

Thank you!`;

  window.location.href = `mailto:info@kailagreestudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};