import UploadBox from "../components/UploadBox"

export default function Landing() {
  return (
    <div className="container">

      {/* HERO */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        
        <h1 style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          Deteksi Gambar AI dalam Sekejap
        </h1>

        <p style={{
          color: "gray",
          fontSize: "16px"
        }}>
          Unggah gambar dan kami akan menganalisis apakah itu dibuat oleh AI atau tidak
        </p>

      </div>

      {/* UPLOAD BOX */}
      <div style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="card" style={{ width: "400px" }}>
          <UploadBox />
        </div>
      </div>

    </div>
  )
}