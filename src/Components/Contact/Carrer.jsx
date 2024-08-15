import React, { useState } from 'react';
import emailjs from "emailjs-com"

const CareerPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number,setNumber] =  useState('')
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [message, setMessage] = useState('');

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setResumeName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !resume || !number) {
      setMessage('Please fill in all fields and upload your resume.');
      return;
    }
    const val = {
        name:"",
        email :" ",
        number : ""
    }
    val.name = name;
    val.email = email;
    val.number = number;
    const serviceid = "service_lp0fl5d";
    const templateid = "template_pkvl043";
    const userid = "65jBapvXd7s4VpsWj";
    emailjs.send(serviceid,templateid,val,userid).then((res)=>{
        setMessage('Your application has been submitted successfully!. Our HR team will contact you if any role matches your profile.');
        setName("")
   setEmail("")
   setResumeName("")
   setNumber('')
      }).catch((er)=>{
        console.log(er)
        setMessage("There was an error while submitting your application")
      })
    // Handle form submission here (e.g., send data to a server)
   
    
  };

  return (
    <div className="min-h-screen  flex relative items-center justify-center ">
      <div className=" p-10 rounded-3xl  shadow-2xl max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Explore Your Carrer in our company</h2>
        {message && <p className="text-center text-green-600 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-white font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-700"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-white font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-700"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-white font-medium mb-2" htmlFor="email">
              Mobile Number
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-700"
              placeholder="Your mobile number"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-white font-medium mb-2" htmlFor="resume">
              Upload Resume
            </label>
            <input
              type="text"
              id="resume"
              value={resumeName}
              placeholder="Click here to choose a file"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 bg-gray-100 cursor-pointer"
              onClick={() => document.getElementById('fileUpload').click()}
            />
            <input
              type="file"
              id="fileUpload"
              onChange={handleResumeChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <button
            type="submit"
            className=" p-4 bg-zinc-600 justify-between  text-wite hover:scale-110  py-3 rounded-full font-semibold shadow-lg hover:shadow-xl  transform transition-transform duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
