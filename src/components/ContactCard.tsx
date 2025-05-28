import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useTranslation } from "@/i18n/client";

const ContactCard: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi d'un message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <Card className="p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
      {submitted ? (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-xl font-bold">{t("footer.send_message")}</h3>
          <p className="text-muted-foreground">{t("footer.project_inquiry")}</p>
          <Button onClick={() => setSubmitted(false)}>
            {t("footer.send_message")}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-3">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              {t("contact.name")}
            </label>
            <Input
              id="name"
              placeholder={t("contact.name_placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="grid gap-3">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              {t("contact.email")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t("contact.email_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="grid gap-3">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none"
            >
              {t("contact.message")}
            </label>
            <Textarea
              id="message"
              placeholder={t("contact.message_placeholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || submitted}
            className="w-full"
          >
            {isSubmitting
              ? t("contact.sending")
              : submitted
              ? t("contact.sent")
              : t("footer.send_message")}
          </Button>
        </form>
      )}
    </Card>
  );
};

export default ContactCard;
