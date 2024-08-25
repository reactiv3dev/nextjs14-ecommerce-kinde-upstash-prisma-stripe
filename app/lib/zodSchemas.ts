import { z } from 'zod';
import { ProductStatus, Category } from '@prisma/client';
 

export const productSchema = z.object({
    name: z.string().trim().min(3, "Minimal product name length not satisfied (3)").max(255, "Exceeded length for product title (255)"),
    description: z.string().trim().min(3, "Minimal product description length not satisfied (10)").max(255, "Exceeded length for product description (255)"),
    status: z.nativeEnum(ProductStatus),
    price: z.coerce.number().positive({ message: "Price must be positive value in US cents"}).min(100, "Item price must be at least 100 cents (1$)"),
    images: z.array(z.string()).min(1, { message: "Required to have at least 1 image to represent product"}),
    isFeatured: z.coerce.boolean().optional(),
    category: z.nativeEnum(Category),
});

export type productSchemaType = z.infer< typeof productSchema>;

 
 