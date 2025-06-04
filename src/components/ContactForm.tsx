import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../lib/contactSchema";
import type { ContactFormData } from "../lib/contactSchema";
import { useState } from "react";

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

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section className="py-24 bg-surface dark:bg-zinc-900" id="contact">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">
          Let’s Connect
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-dark p-8 rounded-2xl shadow-xl"
          noValidate
        >
