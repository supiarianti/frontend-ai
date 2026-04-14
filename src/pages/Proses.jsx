import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Proses() {
  const navigate = useNavigate()
  const location = useLocation()

  const image = location.state?.image

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/hasil", { state: { image } }) // 🔥 kirim image
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 style={{ fontWeight: "bold" }}>
  Menganalisis gambar...
</h2>

      {/* tampilkan preview */}
      {image && (
  <img 
    src={image} 
    alt="preview" 
    width="200"
    style={{ marginTop: "20px", borderRadius: "10px" }}
  />
)}

      <div style={{
        marginTop: "20px",
        width: "40px",
        height: "40px",
        border: "4px solid black",
        borderTop: "4px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}></div>
    </div>
  )
}