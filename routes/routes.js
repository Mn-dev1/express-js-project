import express from 'express'
import {getAllContacts, contactById, addContact, updateContact, deleteContact} from '../controllers/Contact.js'

const contactRoutes = express.Router()
contactRoutes.get('/contacts', getAllContacts)
contactRoutes.get('/contact/:id', contactById)
contactRoutes.get('/contacts/add', addContact)
contactRoutes.get('/update/:id', updateContact)
contactRoutes.get('/delete/:id', deleteContact)

export default contactRoutes