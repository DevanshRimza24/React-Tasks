import { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//     name: string;
//     email: string;
//   }
  


//   interface Errors {
//     name?: string;
//     email?: string;
//   }
  
  export const useForm = (initialState: any) => {
    // const [formData, setFormData] = useState<FormData>(initialState);
    // const [errors, setErrors] = useState<Errors>({});
    const [token, setToken] = useState(null);

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   const { name, value } = e.target;
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // };
  
    // const validateForm = (): Errors => {
    //   let formErrors: Errors = {};
    //   if (!formData.name) formErrors.name = "Name is required.";
    //   if (!formData.email) formErrors.email = "Email is required.";
    //   if (formData.email && !formData.email.includes('@')) formErrors.email = "Email is invalid.";
    //   return formErrors;
    // };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>, updateUser: (userData: FormData) => void) => {
      e.preventDefault();
    //   const validationErrors = validateForm();
    //   if (Object.keys(validationErrors).length === 0) {
        updateUser(formData); 
        setFormData(initialState); 
    //   } else {
    //     setErrors(validationErrors);
    //   }
    };
  
    return {
      formData,
      handleChange,
      handleSubmit,
    //   errors,
    };
  };