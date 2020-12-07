import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModels';

const Contact = mongoose.model('contact', ContactSchema);
export const addNewContact = (req,res) => {
  let myContact = new Contact(req.body);

  myContact.save((err,contact) => {  
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });

}