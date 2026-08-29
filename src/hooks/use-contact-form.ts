import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailjs";

export function useContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const budget = formData.get("budget") as string;
    const scope = formData.get("scope") as string;
    const message = formData.get("message") as string;

    try {
      await sendContactEmail({
        name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        budget: budget || undefined,
        scope: scope || undefined,
        message,
      });

      toast.success("Message sent successfully!");
      setSent(true);
      form.reset();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sent,
    setSent,
    isSubmitting,
    onSubmit,
  };
}
