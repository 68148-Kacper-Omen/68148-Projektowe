import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        imie: {
            type: String,
            required: [true, "Imię jest wymagane"]
        },
        nazwisko: {
            type: String,
            required: [true, "Nazwisko jest wymagane"]
        },
        email: {
            type: String,
            required: [true, "Email jest wymagany"]
        },
        wiadomosc: {
            type: String,
            required: [true, "Wiadomość jest wymagana"]
        },
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model("Message", messageSchema)

export default Message