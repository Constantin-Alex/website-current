import { defineCollection, z } from "astro:content";

const vacancyCollection = defineCollection({
  schema: z.object({
    role: z.string(),
    reference: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  vacancies: vacancyCollection,
  news: newsCollection,
};
