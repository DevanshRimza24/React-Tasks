import { useEffect, useState } from 'react'


function practice() {
    const [count, setCount] = useState(0)
      const [firstName, setFirstName] = useState(' ')
      const [lastName, setLastName] = useState('')
      const [fullName, setFullName] = useState('')


      useEffect(() => {
    
        // console.log('Component rendered or count changed');
        console.log(`Count changed to ${count}`);
      },[count]);
    
    function handleFirstNameChange(e : any) {
       setFirstName(e.target.value)
       setFullName(e.target.value + " " + lastName)
    }
    
    function handleLastNameChange(e : any) {
      setLastName(e.target.value)
      setFullName(firstName + " " + e.target.value)
    }

    return (
        <>
        
       
        
         <div>
         
         
    
    
    
            <label>
              First Name : 
              <input
                 value = {firstName}
                 onChange = {handleFirstNameChange}
              />
            </label>
    
            <label>
              Last Name : 
              <input
              value = {lastName}
                 onChange = {handleLastNameChange}
                 
              />
            </label>
    
            <p>
              {fullName}
            </p>
    
    
            <p>
              <button onClick={() => setCount(count + 1)}>Click Here</button>
              Count : {count}
            </p>
         </div>
         
    
    
          
        </>
      )


}

export default practice