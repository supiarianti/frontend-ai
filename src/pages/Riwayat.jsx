export default function Riwayat() {
  const data = [
    { nama: "Gambar 1", hasil: "AI" },
    { nama: "Gambar 2", hasil: "Non AI" },
  ]

  return (
    <div className="container">
      <h2>Riwayat</h2>

      {data.map((item, i) => (
        <div key={i} className="card" style={{ marginBottom: "10px" }}>
          <p>{item.nama}</p>
          <p>{item.hasil}</p>
        </div>
      ))}
    </div>
  )
}