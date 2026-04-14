import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"

export default function UploadBox() {
  const navigate = useNavigate()
  const fileInputRef = useRef()
  const [image, setImage] = useState(null)

  const handleFile = (e) => {
    const file = e.target.files[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)

      setTimeout(() => {
        navigate("/proses", { state: { image: imageUrl } })
      }, 1000)
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* INPUT FILE (WAJIB ADA) */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFile}
        style={{ display: "none" }}
      />

      {/* BOX */}
      <div style={{
        border: "2px dashed #ccc",
        padding: "30px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      onClick={() => fileInputRef.current.click()}
      >

        <p style={{ color: "gray" }}>
          Seret atau klik untuk unggah gambar
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Upload Gambar
        </button>

      </div>

      {/* PREVIEW */}
      {image && (
        <img 
          src={image} 
          alt="preview" 
          width="200"
          style={{ marginTop: "20px", borderRadius: "10px" }}
        />
      )}

    </div>
  )
}