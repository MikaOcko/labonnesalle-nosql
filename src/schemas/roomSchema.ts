// ========== Imports ==========
import { z } from 'zod';
// ========== Logic ===========

export const roomSchema = z.object({
    label: z
        .string()
        .min(3, "Le nom de la salle doit avoir au minimum 3 caractères."),
    capacity: z
        .number()
        .positive("La capacité doit être supérieure à 0."),
    site: z
        .string()
        .min(3, "Le site doit avoir au minimum 3 caractères."),
    building: z
        .string()
        .min(1, "Le bâtiment doit avoir au minimum 1 caractère."),
    floor: z.number(),
    material: z.string().optional(),
});