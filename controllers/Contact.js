import Contact from "../models/Contact.js"

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        return res.json({contacts})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const contactById = async (req, res) => {
    try {
        const contacts = await Contact.findById(req.params.id)
        if (!contacts)
            return res.status(404).json({ message: "Contact not found" }) 
        res.json(contacts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const addContact = async (req, res) => {
    try {
        const newContact = new Contact({ name: 'manar', phone: 724484 })
        newContact.save().then(() => res.json('contact ajouter '))
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateContact = async (req, res) => {
    try {
        const contacts = await Contact.findById(req.params.id)
        if (!contacts)
            return res.status(404).json({ message: "Contact not found" }) 
        contacts.name='mayar'
        contacts.phone = 3456723
        contacts.save().then(() => console.log('contact modifie '))
        res.json(contacts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteContact = async (req, res) => {
    try {
        const contacts = await Contact.findByIdAndDelete(req.params.id)
        if (!contacts)
            return res.status(404).json({ message: "Contact not found" }) 
        res.json('contact supprime')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export {getAllContacts, contactById, addContact, updateContact, deleteContact}