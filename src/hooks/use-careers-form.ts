import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailjs";

export function useCareersForm() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const portfolio = formData.get("portfolio") as string;
    const notes = formData.get("notes") as string;

    try {
      await sendContactEmail({
        name,
        email,
        phone,
        company: "Careers Application",
        budget: `Portfolio: ${portfolio}`,
        scope: `Apply: ${selectedRole}`,
        message: notes || "No additional notes provided.",
      });
      toast.success("Application successfully submitted!");
      setSent(true);
    } catch (err) {
      toast.error("Failed to send application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsFormOpen(open);
    if (!open) {
      setTimeout(() => setSent(false), 200);
    }
  };

  return {
    selectedRole,
    setSelectedRole,
    sent,
    setSent,
    loading,
    isFormOpen,
    setIsFormOpen,
    onSubmit,
    handleOpenChange,
  };
}
