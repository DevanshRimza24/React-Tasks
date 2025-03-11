import { useState } from "react"
import axios from "axios"


const Upload = () => {

    

    const allowedFiles = ["image/png", "image/jpeg", "image/jpg", "image/webp"]
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const selectedFiles = event.target.files?.[0]

        if (selectedFiles && allowedFiles.includes(selectedFiles.type)) {
            setFile(selectedFiles)
            setMessage("")
        }
        else {
            setMessage("Invalid File type")
            setFile(null)

        }

    }

    const handleUpload = async () => {

        if (!file) {
            setMessage("Please select a file")
            return
        }

        const formData = new FormData()
        formData.append('imageUrl', file)
        const token = localStorage.getItem("token")
        try {
          const response = await axios.post("http://localhost:3001/api/upload", formData, {
            
            headers : {
                "Content-Type" : "multipart/form-data",
                Authorization : `Bearer ${token}`,
            },
            // withCredentials: true,
          }, )

          console.log(response.status)
          

          if(response.status==412){
            setMessage("Access denied, admin only")
          }

          if(response.status){
            setMessage("File Uploaded successfully")
            setFile(null)
        }else {
            setMessage("Upload failed. Try again.")
        }

        } catch (error : any) {
           console.log(error.response.data.status)
           if(error.response.data.status==412) {
            setMessage("Access denied, admin only")
           }
           else{
            setMessage("Error uploading message")

           }
        }
    }

    const [file, setFile] = useState<File | null>()
    const [message, setMessage] = useState("")

    return (
        <div className="upload-container">
            <h2>Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />

            <button onClick={handleUpload}>Upload</button>
            {message && <p className="message">{message} </p>}
        </div>

    )

}


export default Upload