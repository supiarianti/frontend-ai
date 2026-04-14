export default function Register() {
  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Daftar</h2>

        <input placeholder="Nama" />
        <input placeholder="Email" />
        <input placeholder="Password" />

        <button>Daftar</button>
      </div>
    </div>
  )
}