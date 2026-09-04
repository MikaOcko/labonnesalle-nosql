// ========== Imports ===========
import mongoose from "mongoose";

// ========== Logic ==========
const roomSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    material: {
        type: [String],
        required: true
    }
});

export const RoomModel = mongoose.model("Room", roomSchema);