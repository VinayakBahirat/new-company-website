import { useState, type FormEvent, type ChangeEvent } from "react";
import { COMPANY } from "@/content/site";

export function useLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const body = `
Name: ${fields.name}
Company: ${fields.company}
Email: ${fields.email}
WhatsApp: ${fields.whatsapp}
Service: ${fields.service}
Budget: ${fields.budget}
Timeline: ${fields.timeline}
Message: ${fields.message}
    `.trim();

    // Open mailto as the form action
    window.location.href = `mailto:${COMPANY.email}?subject=New Project Enquiry from ${encodeURIComponent(fields.name)}&body=${encodeURIComponent(body)}`;

    // Show success after brief delay
    setTimeout(() => setStatus("sent"), 800);
  }

  return {
    status,
    fields,
    setFields,
    handleChange,
    handleSubmit,
  };
}
