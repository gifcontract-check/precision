"use server";

import { contactSchema, type ContactState } from "@/lib/types";

export async function sendMessage(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Erreur de validation. Veuillez vérifier vos informations.",
    };
  }
  
  try {
    // In a real application, you would send an email here.
    // e.g., using Resend, Nodemailer, etc.
    console.log("New message received:");
    console.log(validatedFields.data);

    return {
      success: true,
      message: "Votre message a été envoyé avec succès !",
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
