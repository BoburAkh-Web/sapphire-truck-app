import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "../sections/contact/contactSchema";

export async function sendContactEmail(
  values: ContactFormValues,
  quoteSummary: string,
): Promise<void> {
  const templateParams = {
    user_number: values.phone,
    user_email: values.email,
    message: buildMessage(values, quoteSummary),
  };

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
  );
}

function buildMessage(values: ContactFormValues, quoteSummary: string): string {
  if (!values.includeQuote) {
    return values.message;
  }

  const estimate = `Calculator estimate: ${quoteSummary}`;

  return values.message ? `${values.message}\n\n---\n${estimate}` : estimate;
}
