import { useState } from "react"
import { useForm } from "./useForm"
import { useUser } from "./UserContext";

export const RegistrationForm = () => {

    const { user, updateUser } = useUser(); 
    const { formData, handleChange, handleSubmit } = useForm({
        name: '',
        email: '',
    });

    return (

        <div>
            <h2>Registration</h2>
            <form onSubmit={(e) => handleSubmit(e, updateUser)}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    {/* {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} */}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
                </div>

                <button type="submit">Submit</button>


            </form>


            {user && (
        <div>
          <h3>User Info</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
        </div>



    )

}