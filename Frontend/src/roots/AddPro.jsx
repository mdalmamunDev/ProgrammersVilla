import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddPro({ proList, setProList, setRoot, setPro, pro }) {
  const [formData, setFormData] = useState({
    name: pro ? pro.name : '',
    about: pro ? pro.about : '',
    born: pro ? pro.born : '',
    address: pro ? pro.address : '',
    parents: pro ? pro.parents : '',
    died: pro ? pro.died : '',
    education: pro ? pro.education : '',
    awards: pro ? pro.awards : '',
    img: pro ? pro.img : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    pro ? handleEdit() : handleAdd();
    // console.log(pro);
    // console.log(proList);
    //update root
    setRoot("Pro");
  };

  const handleAdd = async () => {
    await axios
      .post(`http://localhost:3000/programmer/addProgrammer`, formData)
      .then((res) => {
        if (res.data) {
          console.log(res.data.message);
          toast.success("Added Successfully");
          //update proList
          setPro(res.data.pro);
          setProList([...proList, res.data.pro]);
        }
        // localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  }
  const handleEdit = async () => {
    await axios
      .put(`http://localhost:3000/programmer/editProgrammer`, {
        id: pro._id,
        formData: formData
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data.message);
          toast.success("Updated Successfully");
          // Update proList with the updated programmer
          const updatedProList = proList.map((pro) =>
            pro._id === res.data.pro._id ? res.data.pro : pro
          );
          setProList(updatedProList);
          // Update pro state if necessary
          if (pro && pro._id === res.data.pro._id) {
            setPro(res.data.pro);
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };


  return (
    <div className='container'>
      <h2 className='text-center'>Add a new programmer</h2>
      <form onSubmit={handleSubmit}>
        <div className='mx-auto' style={{ width: "500px" }}>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label>
            <input type="text" id="name" name="name" className='form-control' value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="about" className='form-label'>About:</label>
            <textarea id="about" name="about" rows="4" className='form-control' value={formData.about} onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="born" className='form-label'>Born:</label>
            <input type="text" id="born" name="born" className='form-control' value={formData.born} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className='form-label'>Address:</label>
            <input type="text" id="address" name="address" className='form-control' value={formData.address} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="parents" className='form-label'>Parents:</label>
            <input type="text" id="parents" name="parents" className='form-control' value={formData.parents} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="died" className='form-label'>Died:</label>
            <input type="text" id="died" name="died" className='form-control' value={formData.died} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="education" className='form-label'>Education:</label>
            <input type="text" id="education" name="education" className='form-control' value={formData.education} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="awards" className='form-label'>Awards:</label>
            <input type="text" id="awards" name="awards" className='form-control' value={formData.awards} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className='form-label'>Image URL:</label>
            <input type="text" id="img" name="img" className='form-control' value={formData.img} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary ms-auto">Submit</button>
        </div>
      </form>
    </div>
  )
}
