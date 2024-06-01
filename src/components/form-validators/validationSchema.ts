import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const createNewArticleSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  tag: z.string().min(1),
  article: z.string().min(1),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});

export const createCheckoutCardSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email("This email address is invalid"),
  phone: z.string().min(10),
  country: z.string().min(1),
  state: z.string().min(1),
  cardNo: z.string().min(3),
  cvv: z.string().max(3),
  date: z.date(),
});

export const createCryptoSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email("This email address is invalid"),
  phone: z.string().min(10),
  country: z.string().min(1),
  state: z.string().min(1),
});

export const createGeneralSchema = z.object({
  x: z.string().min(1),
  discord: z.string().min(1),
  email: z.string().min(1).email("This email address is invalid"),
});
