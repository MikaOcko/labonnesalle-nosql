// ========== Imports ==========
import { z } from 'zod';
// ========== Logic ===========

export const roomSchema = z.object({
    label: z
        .string()
        .min(3),
    capacity: z.coerce
        .number()
        .positive(),
    site: z
        .string()
        .min(3),
    building: z
        .string()
        .min(1),
    floor: z.coerce.number(),
    material: z.array(z.string()),
});

export const roomUpdateSchema = roomSchema.partial();