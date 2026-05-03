import Message from '../models/message.model.js'

const sendMessage = async (req, res) => {
    try {
        const {imie, nazwisko, email, wiadomosc} = req.body
        const data = {imie, nazwisko, email, wiadomosc}

        if (!imie) {
            return res.status(400).json({message: "Imię jest wymagane"})
        }
        if (!nazwisko) {
            return res.status(400).json({message: "Nazwisko jest wymagane"})
        }
        if (!email) {
            return res.status(400).json({message: "Email jest wymagany"})
        }
        if (!wiadomosc) {
            return res.status(400).json({message: "Wiadomość jest wymagana"})
        }

        const newMessage = await Message.create(data)
        return res.status(200).json({message: "Wiadomość wysłana pomyślnie"})
    } catch (error) {
        return res.status(500).json({message: `Błąd serwera: ${error}`})
    }
}

export {sendMessage}