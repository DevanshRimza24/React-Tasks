import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      
      const email = formData.email;
      const password = formData.password;
    const response = await axios.post("http://localhost:3001/api/login-user", { email, password }, { withCredentials: true });
    console.log(formData)
    console.log(response.data.status);

    if (response.data.status) {
        console.log(response);

        localStorage.setItem("accessToken", response.data.data.accessToken);
        // console.log(response.data.data.accessToken);
        navigate("/Home")
      } else {
        setError(response.data.message);
      }
    } catch (error : any) {
      // const newErrors : Record<string, string> = {}
      //  const err = JSON.parse(error)
      console.log("jhghfgfg")
      setError("Something went wrong");
      console.log(error.response.data.status)
      if(error.response.data.status==404) {
          console.log("Email does not exists")
          const newErrors : Record<string, string> = {}
          newErrors.email="Email does not exists"
          setErrors(newErrors)
      }
      else if(error.response.data.status==401) {
        const newErrors : Record<string, string> = {}
          newErrors.password="Invalid Password"
          setErrors(newErrors)
      }
    }
  };

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
      })
      
      const [error, setError] = useState("");

      const [errors, setErrors] = useState<Record<string, string>>({})
      
      const validateForm = () => {
      
      const newErrors : Record<string, string> = {}
      // console.log(formData.name)
      if(!formData.name.trim()) {
        newErrors.name = "Name is required"
      } 
      else if(formData.name.length < 3) {
        newErrors.name = "Name must be atleast 3 characters"
      }
      
      if(!formData.email.trim()) {
        newErrors.email = "Email is required"
      } 
      
      
      if(!formData.password.trim()) {
        newErrors.password = "Password is required"
      } 
      else if(formData.password.length < 6) {
        newErrors.password = "Password must be atleast 6 characters"
      }
      
      
      

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
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
      
            
      
            case "password":
              newErrors.password = value.toString().length < 6 ? "Password must be at least 6 characters" : "";
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
        <div className='bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
         <form onSubmit={handleSubmit}>
     
           <div className='flex flex-col mb-4 justify-between'>
            <div className="flex justify-between">
            <label className='block font-medium mr-10'>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className='input bg-gray-50'/>
            </div>
             
             <div>
             {errors.name && <p className='error'>{errors.name}</p>}
             </div>
           </div>
     
           <div className='flex flex-col mb-4 justify-between'>
            <div className="flex justify-between">
            <label className='block font-medium mr-10'>Email</label>
             <input type="email" name="email" value={formData.email} onChange={handleChange} className='input bg-gray-50'/>
            
            </div>
             <div>
             {errors.email && <p className='error'>{errors.email}</p>}
             </div>
            
             
           </div>
     
        
           <div className='flex flex-col mb-4 justify-between'>
            <div className="flex justify-between">
            <label className='block font-medium mr-10'>Password</label>
             <input type="password" name="password"  onChange={handleChange} className='input bg-gray-50'/>
    
            </div>
            <div>
            {errors.password && <p className='error'>{errors.password}</p>}
            </div>
                      
     
           </div>
           
            <button type="submit" onClick={handleLogin} className='btn'>Submit</button>
         </form>
         {/* <Button>Click me</Button> */}
     </div>
     

    )
   
}

export default Login