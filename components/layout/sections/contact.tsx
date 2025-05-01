// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// import { z } from "zod";
// import emailjs from "@emailjs/browser";
// import TopWave from "./topWave";
// import BottomWave from "./bottomWave";

// const schema = z.object({
//   name: z.string().min(1, "Nom requis"),
//   email: z.string().email("Email invalide"),
//   message: z.string().min(1, "Message requis"),
// });

// type FormData = z.infer<typeof schema>;

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
//     {}
//   );

//   const [focusedField, setFocusedField] = useState<string | null>(null); // État pour le champ en focus

//   const clearErrorsAndStatus = () => {
//     setTimeout(() => {
//       setErrors({});
//       setStatus("");
//     }, 3000);
//   };

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setStatus("Envoi en cours...");

//     const result = schema.safeParse(formData);

//     if (!result.success) {
//       const fieldErrors: Partial<Record<keyof FormData, string>> = {};
//       for (const issue of result.error.issues) {
//         fieldErrors[issue.path[0] as keyof FormData] = issue.message;
//       }
//       setErrors(fieldErrors);
//       setStatus("Erreur de validation des champs.");
//       clearErrorsAndStatus();
//       return;
//     }
//     try {
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//       };

//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
//         templateParams,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
//       );

//       setStatus("Message envoyé avec succès!");
//       setFormData({ name: "", email: "", message: "" });
//       clearErrorsAndStatus();
//     } catch (error) {
//       setStatus("Échec de l'envoi du message.");
//       clearErrorsAndStatus();
//     }
//   };

//   const getStatusClass = () => {
//     if (status.includes("succès")) {
//       return "text-green-600";
//     } else if (status.includes("Erreur") || status.includes("Échec")) {
//       return "text-red-600";
//     } else {
//       return "";
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="container relative md:w-[700px]  pt-24 sm:pt-28 pb-40"
//     >
//       {/* Liseré ondulé en haut de la section */}
//       <TopWave />
//       <div className="pt-2 text-center mb-8">
//         <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider ">
//           CONTACTEZ-NOUS
//         </h2>

//         <h2 className="text-xl md:text-2xl text-center font-bold">
//           Une question ? <br></br> Notre équipe se tient à votre disposition.
//         </h2>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2 mb-4">
//           <label htmlFor="name" className="block text-sm font-medium ">
//             Nom:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md focus:border-orange-500"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>
//         <div className="flex flex-col gap-2 mb-4">
//           <label htmlFor="email" className="block text-sm font-medium">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>
//         <div className="flex flex-col gap-2 mb-4">
//           <label htmlFor="message" className="block text-sm font-medium">
//             Message:
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={10}
//             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"
//           />
//           {errors.message && (
//             <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full inline-flex justify-center py-2 px-4 border border-primary  shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//         >
//           Envoyer
//         </button>
//         {status && (
//           <p className={`text-sm mt-2 ${getStatusClass()}`}>{status}</p>
//         )}
//       </form>
//       {/* Liseré ondulé en bas de la section, inversé */}
//       <BottomWave />
//     </section>
//   );
// }

// BEGIN 01/05/2025 compatible next-intl

"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

import TopWave from "./topWave";
import BottomWave from "./bottomWave";

const schema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Message requis"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const clearErrorsAndStatus = () => {
    setTimeout(() => {
      setErrors({});
      setStatus("");
    }, 3000);
  };

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
    setStatus(t("sending"));

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as keyof FormData] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus(t("validationError"));
      clearErrorsAndStatus();
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      setStatus(t("success"));
      setFormData({ name: "", email: "", message: "" });
      clearErrorsAndStatus();
    } catch (error) {
      setStatus(t("fail"));
      clearErrorsAndStatus();
    }
  };

  const getStatusClass = () => {
    if (status.includes("succès") || status.includes("success")) {
      return "text-green-600";
    } else if (
      status.includes("Erreur") ||
      status.includes("Échec") ||
      status.includes("fail") ||
      status.includes("validation")
    ) {
      return "text-red-600";
    } else {
      return "";
    }
  };

  return (
    <section
      id="contact"
      className="container relative md:w-[700px] pt-24 sm:pt-28 pb-40"
    >
      <TopWave />
      <div className="pt-2 text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-primary mb-2 tracking-wider">
          {t("title")}
        </h2>
        <h2 className="text-xl md:text-2xl font-bold">{t("subtitle")}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md focus:border-orange-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            {t("email")}
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
            {t("message")}
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
          className="w-full inline-flex justify-center py-2 px-4 border border-primary shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {t("send")}
        </button>

        {status && (
          <p className={`text-sm mt-2 ${getStatusClass()}`}>{status}</p>
        )}
      </form>

      <BottomWave />
    </section>
  );
}
