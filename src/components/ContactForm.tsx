import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactSchema } from "../lib/contactSchema";
import type { ContactFormData } from "../lib/contactSchema";
import { useState } from "react";
import { motion } from "framer-motion";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [success, setSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(false);
    setSendError(null);

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setSendError("Configuration error. Please try again later.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        publicKey,
      );
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Email send failed", error);
      setSendError("We couldn’t send your message. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <section className="py-24 bg-surface dark:bg-zinc-900" id="contact">
      <div className="container max-w-2xl">
        <motion.h2
          className="text-3xl font-display font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>

        <form
          data-testid="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-dark p-8 rounded-2xl shadow-xl"
          noValidate
          aria-describedby={
            sendError
              ? "contact-submit-error"
              : success
                ? "contact-submit-success"
                : undefined
          }
          aria-busy={isSubmitting}
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full px-4 py-2 border border-border rounded-md bg-light dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-sm text-red-600 mt-1"
                role="alert"
                data-testid="contact-error"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-border rounded-md bg-light dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-sm text-red-600 mt-1"
                role="alert"
                data-testid="contact-error"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="w-full px-4 py-2 border border-border rounded-md bg-light dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-sm text-red-600 mt-1"
                role="alert"
                data-testid="contact-error"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            data-testid="contact-submit"
            className="px-6 py-3 bg-brand text-dark rounded-full font-medium hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {success && (
            <p
              id="contact-submit-success"
              className="text-green-600 font-medium mt-4"
              role="status"
              aria-live="polite"
            >
              Your message was sent successfully!
            </p>
          )}
          {sendError && (
            <p
              id="contact-submit-error"
              className="text-red-600 font-medium mt-4"
              role="alert"
            >
              {sendError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
