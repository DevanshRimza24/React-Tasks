import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button, Checkbox} from 'antd'
import { z } from "zod"
// import "antd/dist/antd.css";
// import { zodResolver } from "@hooksform/resolvers/zod"
import './App.css'
import RegistrationForm from './Registration'

function App() {
  // const [count, setCount] = useState(0)
const [formData, setFormData] = useState({
  name : "",
  email : "",
  age : "",
  dob : "",
  password : "",
  confirmPassword : "",
  gender : "",
  country : "",
  interests : [] as string[],
  bio: "",
  terms : false,
})

const [errors, setErrors] = useState<Record<string, string>>({})

const validateForm = () => {

const newErrors : Record<string, string> = {}
console.log(formData.name)
if(!formData.name.trim()) {
  newErrors.name = "Name is required"
} 
else if(formData.name.length < 3) {
  newErrors.name = "Name must be atleast 3 characters"
}

if(!formData.email.trim()) {
  newErrors.email = "Email is required"
} 

if(!formData.age.trim()) {
  newErrors.age = "Age is required"
} 
else if(isNaN(Number(formData.age)) || Number(formData.age)<18) {
  newErrors.age = "You must be atleast 18 years of age"
}

if(!formData.password.trim()) {
  newErrors.password = "Password is required"
} 
else if(formData.password.length < 6) {
  newErrors.password = "Password must be atleast 6 characters"
}

if(formData.confirmPassword !== formData.password) {
  newErrors.confirmPassword = "Passwords do not match"
} 

if(!formData.gender) {
  newErrors.gender = "Please select a gender"
} 

if(!formData.country) {
  newErrors.country = "Please select a country"
} 

if(!formData.interests.length) {
  newErrors.interests = "Select atleast one interests"
} 

if(!formData.bio.trim()) {
  newErrors.bio = "Bio is required"
} 
else if(formData.bio.length < 200) {
  newErrors.bio = "Bio must be under 200 characters"
}

if(formData.terms) newErrors.terms = "jdjfkj"


setErrors(newErrors)
return Object.keys(newErrors).length === 0
}

const handleChangeValidate = (e : React.FormEvent) => {
  e.preventDefault()
  if(validateForm()) {
    console.log("Form Data : ",)
    
  }
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const {name, value, type} = e.target;
  // if(type==="checkbox") {
  //   // const updatedInterests = e.target.checked
  // }
  
  setFormData({ ...formData, [name] : value })
  validateInput(name, value)
}

const validateInput = (name : string, value: string | boolean) => {
  
  const newErrors = { ...errors}

  switch(name) {
      case "name" :
      newErrors.name = value.toString().trim().length < 3 ? "Name must be atleast 3 characters" : ""
      break

      case "email" :
      newErrors.email = !/^\S+@\S+\.\S+$/.test(value.toString())  ? "Invalid Email Address" : ""
      break

      case "age":
        newErrors.age = Number(value) < 18 ? "You must be at least 18" : "";
        break;

      case "dob":

        const dobDate = new Date(value.toString());
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        newErrors.dob = age < 18 ? "You must be at least 18 years old" : "";
        break;

      case "password":
        newErrors.password = value.toString().length < 6 ? "Password must be at least 6 characters" : "";
        break;

      case "confirmPassword":
        newErrors.confirmPassword = value !== formData.password ? "Passwords do not match" : "";
        break;

      case "gender":
        newErrors.gender = value ? "" : "Please select a gender";
        break;

      case "country":
        newErrors.country = value ? "" : "Please select a country";
        break;

      case "bio":
        newErrors.bio = value.toString().trim().length > 200 ? "Bio must be under 200 characters" : "";
        break;

      case "terms":
        newErrors.terms = value ? "" : "You must accept the terms";
        break;
      
  }

  setErrors(newErrors)
}

const handleSubmit = (e : React.FormEvent) => {
  e.preventDefault()
  if(validateForm()) {
    console.log("Form Data : ",)
    alert("From submitted successfully")
  }
}

  return (
    <>
<div className='bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto p-6'>
   <h2 className='text-2xl font-bold mb-4'>User Registration Form</h2>
    <form onSubmit={handleSubmit}>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className='input bg-gray-50'/>
        
        {errors.name && <p className='error'>{errors.name}</p>}
      </div>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className='input bg-gray-50'/>
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>Age</label>
        <input type="number" name="age"  onChange={handleChange} className='input bg-gray-50'/>
        {errors.age && <p className='error'>{errors.age}</p>}

      </div>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>DOB</label>
        <input type="date" name="dob"  onChange={handleChange} className='input bg-gray-50'/>
        {errors.dob && <p className='error'>{errors.dob}</p>}

      </div>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>Password</label>
        <input type="password" name="password"  onChange={handleChange} className='input bg-gray-50'/>
        {errors.password && <p className='error'>{errors.password}</p>}

      </div>

      <div className='flex flex-row mb-4 justify-between'>
        <label className='block font-medium mr-10'>Confirm Password</label>
        <input type="password" name="confirmPassword"  onChange={handleChange} className='input bg-gray-50'/>
        {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

      </div>

      <div className='flex flex-row mb-4'>
       <label className='block font-medium mr-10'>Gender</label>
         <div className='flex gap-4'>
           <label><input type="radio" name="gender" value="male" onChange={handleChange} />Male</label>
           <label><input type="radio" name="gender" value="female" onChange={handleChange} />Female</label>
           <label><input type="radio" name="gender" value="other" onChange={handleChange} />Other</label>
         </div>
         {errors.gender && <p className='error'>{errors.gender}</p>}
      </div>

      <div className='flex flex-row mb-4'>
       <label className='block font-medium mr-10'>Country</label>
         <select name="country" value={formData.country} onChange={handleChange} className='input'>
           <option value="">Select a Country</option>
           <option value="India">India</option>
           <option value="Australia">Australia</option>
           <option value="USA">USA</option>
         </select>
         {errors.country && <p className='error'>{errors.country}</p>}

      </div>
    

      <div className='flex flex-row mb-4'>
         <label className='block font-medium mr-10'>Interests</label>
          <div className='flex flex-wrap gap-3'>
          <label><input type="checkbox" name="interests" value="coding" onChange={handleChange} />Coding</label>
          <label><input type="checkbox" name="interests" value="Music" onChange={handleChange} />Music</label>
          <label><input type="checkbox" name="interests" value="Cricket" onChange={handleChange} />Cricket</label>
          {errors.interests && <p className='error'>{errors.interests}</p>}

          </div>
      </div>

      <div className='flex mb-4 justify-between min-h-28'>
        <label className='block font-medium mr-10'>Bio</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} className='input bg-gray-50'></textarea>
        {errors.bio && <p className='error'>{errors.bio}</p>}

      </div>
       <button type="submit" className='btn'>Submit</button>
    </form>
    {/* <Button>Click me</Button> */}
</div>


   <div className="App">
      <RegistrationForm />  {/* Add the RegistrationForm component here */}
    </div>

    {/* <div className='text-2xl font-bold'>test</div> */}
    {/* <form>
      <label className='bg-amber-100 p-4px'>Enter your name:
        <input type="text" />
      </label>
    </form> */}
      
    </>
  )
}

export default App
