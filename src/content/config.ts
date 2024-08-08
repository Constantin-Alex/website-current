import { defineCollection, z } from "astro:content";

const vacancyCollection = defineCollection({
  schema: z.object({
    role: z.string(),
    reference: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

export const collections = {
  vacancies: vacancyCollection,
};
