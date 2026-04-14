import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Masuk</h2>

        <input placeholder="Email" style={{ width: "100%", marginBottom: "10px", padding: "10px" }} />
        <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: "10px", padding: "10px" }} />

        <button onClick={() => navigate("/")} style={{ width: "100%" }}>
          Login
        </button>

        <p style={{ marginTop: "10px" }}>
          Belum punya akun? 
          <span onClick={() => navigate("/register")} style={{ color: "blue", cursor: "pointer" }}>
            Daftar
          </span>
        </p>
      </div>
    </div>
  )
}