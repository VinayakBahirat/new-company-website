import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string | undefined;
  budget?: string | undefined;
  scope?: string | undefined;
  message: string;
  phone?: string | undefined;
}

/**
 * Helper to safely resolve environment variables from import.meta.env or process.env
 */
function getEnvVar(key: string): string | undefined {
  // Try import.meta.env first (Vite/TanStack Start client-side default)
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key] as string;
  }
  // Try process.env next (Node/SSR fallback)
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  return undefined;
}

/**
 * Sends a contact form submission email using EmailJS.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Support both VITE_ prefixed and non-prefixed keys
  const serviceId = getEnvVar("VITE_EMAILJS_SERVICE_ID") || getEnvVar("EMAILJS_SERVICE_ID");
  const templateId = getEnvVar("VITE_EMAILJS_TEMPLATE_ID") || getEnvVar("EMAILJS_TEMPLATE_ID");
  const publicKey = getEnvVar("VITE_EMAILJS_PUBLIC_KEY") || getEnvVar("EMAILJS_PUBLIC_KEY");

  if (!serviceId || !templateId || !publicKey) {
    const missing = [];
    if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID / EMAILJS_SERVICE_ID");
    if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID / EMAILJS_TEMPLATE_ID");
    if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY / EMAILJS_PUBLIC_KEY");
    
    console.error(`EmailJS is missing configuration: ${missing.join(", ")}`);
    throw new Error(
      `EmailJS configuration is missing: ${missing.join(", ")}. Please configure them in your .env file and restart your dev server.`
    );
  }

  // Format the current date and time in a user-friendly format
  const submissionDate = new Date().toLocaleString("en-US", {
    timeZoneName: "short",
  });

  // Map the contact form fields to template parameters matching requirement 15
  const templateParams = {
    sender_name: data.name,
    sender_email: data.email,
    phone_number: data.phone || "Not provided",
    company: data.company || "Not provided",
    selected_service: data.scope || "Not provided",
    budget: data.budget || "Not provided",
    message: data.message,
    submission_date: submissionDate,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status code ${response.status}: ${response.text}`);
    }
  } catch (error) {
    console.error("Failed to send email via EmailJS:", error);
    throw error;
  }
}
