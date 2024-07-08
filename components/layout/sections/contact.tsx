"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Message requis"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    alert(JSON.stringify(formData));
    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // });

    // if (res.ok) {
    //   alert('Message envoyé avec succès!');
    //   setFormData({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    //   setErrors({});
    // } else {
    //   alert('Erreur lors de l\'envoi du message.');
    // }
  };

  return (
    <section id="contact" className="container md:w-[700px]  pt-24 sm:pt-28">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider ">
          CONTACTEZ-NOUS
        </h2>

        <h2 className="text-xl md:text-2xl text-center font-bold">
          Une question ? <br></br> Notre équipe se tient à votre disposition.
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="block text-sm font-medium ">
            Nom:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={10}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-primary  shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
