'use server';

/**
 * @fileOverview Generates fake customer testimonials for the Précision Institut website.
 *
 * - generateCustomerTestimonials - A function that generates customer testimonials.
 * - GenerateCustomerTestimonialsInput - The input type for the generateCustomerTestimonials function.
 * - GenerateCustomerTestimonialsOutput - The return type for the generateCustomerTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomerTestimonialsInputSchema = z.object({
  numberOfTestimonials: z
    .number()
    .default(20)
    .describe('The number of testimonials to generate.'),
  keywords: z
    .string()
    .default(
      'extensions de cils, réhaussement de cils, onglerie, manucure russe, sourcils'
    )
    .describe(
      'Keywords to include in the testimonials to improve SEO and realism.'
    ),
});
export type GenerateCustomerTestimonialsInput = z.infer<
  typeof GenerateCustomerTestimonialsInputSchema
>;

const GenerateCustomerTestimonialsOutputSchema = z.object({
  testimonials: z
    .array(z.string())
    .describe('An array of generated customer testimonials.'),
});
export type GenerateCustomerTestimonialsOutput = z.infer<
  typeof GenerateCustomerTestimonialsOutputSchema
>;

export async function generateCustomerTestimonials(
  input: GenerateCustomerTestimonialsInput
): Promise<GenerateCustomerTestimonialsOutput> {
  return generateCustomerTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCustomerTestimonialsPrompt',
  input: {schema: GenerateCustomerTestimonialsInputSchema},
  output: {schema: GenerateCustomerTestimonialsOutputSchema},
  prompt: `You are a marketing expert generating customer testimonials for Précision Institut, a beauty training center in Lille. Generate realistic and positive customer reviews, incorporating the following keywords where relevant: {{{keywords}}}.  The reviews should mention services like eyelash extensions, lash lifts, nail extensions, Russian manicures and eyebrow shaping.

Generate exactly {{{numberOfTestimonials}}} testimonials.

Each testimonial should be no more than two sentences.

Output the testimonials as a JSON array of strings.

For example:

[\"I had amazing eyelash extensions!\", \"The Russian manicure was perfect.\", \"I love my new eyebrows!\"]`,
});

const generateCustomerTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateCustomerTestimonialsFlow',
    inputSchema: GenerateCustomerTestimonialsInputSchema,
    outputSchema: GenerateCustomerTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
