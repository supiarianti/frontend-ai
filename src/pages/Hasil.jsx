import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Hasil() {
  const location = useLocation()
  const navigate = useNavigate()

  const image = location.state?.image

  // kalau tidak ada data → balik ke landing
  useEffect(() => {
    if (!image) {
      navigate("/")
    }
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Hasil Analisis</h2>

      {image && (
        <img 
          src={image} 
          alt="hasil" 
          width="200"
          style={{ marginTop: "20px" }}
        />
      )}

      <p style={{ marginTop: "20px" }}>
        Kemungkinan Besar AI (85%)
      </p>

      {/* tombol kembali */}
      <button 
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Kembali ke Menu
      </button>
    </div>
  )
}