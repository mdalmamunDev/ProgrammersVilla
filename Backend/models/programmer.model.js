import mongoose from 'mongoose';

const proSchema = new mongoose.Schema({
  name: String,
  about: String,
  born: String,
  address: String,
  parents: String,
  died: String,
  education: String,
  awards: String,
  img: String
});

const Programmer = mongoose.model('Programmer', proSchema);

export default Programmer;
