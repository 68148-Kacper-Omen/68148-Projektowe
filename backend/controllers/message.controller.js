import Message from '../models/message.model.js'

const sendMessage = async (req, res) => {
    try {
        const {name, surname, email, message} = req.body
        const data = {name, surname, email, message}

        if (!name) {
            return res.status(400).json({message: "Imię jest wymagane"})
        }
        if (!surname) {
            return res.status(400).json({message: "Nazwisko jest wymagane"})
        }
        if (!email) {
            return res.status(400).json({message: "Email jest wymagany"})
        }
        if (!message) {
            return res.status(400).json({message: "Wiadomość jest wymagana"})
        }

        const message = await Message.create(data)
        return res.status(200).json({message: "Wiadomość wysłana pomyślnie"})
    } catch (error) {
        return res.status(500).json({message: `Błąd serwera: ${error}`})
    }
}

export {sendMessage}