import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { t } from "../i18n";

const ContactCard: React.FC = () => {
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
      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-3">
          <label htmlFor="name" className="text-sm font-medium leading-none">
            Nom
          </label>
          <Input
            id="name"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="exemple@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Votre message ici..."
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
            ? "Envoi en cours..."
            : submitted
            ? "Message envoyé !"
            : t("footer.send_message")}
        </Button>
      </form>
    </Card>
  );
};

export default ContactCard;
