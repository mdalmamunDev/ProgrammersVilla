import img from '../assets/img/pro_2.jpg'

const ProCard = ({ pro, setProInfo }) => {
  return (
    <div className="card" style={{
      width: "100%",
    }}>
      <img src={pro.img ? pro.img : img} className="card-img-top" alt="Programmer" />
      <div className="card-body">
        <h5 className="card-title">{pro.name}</h5>
        <p className="card-text">{pro.about.substring(0, 150)}...</p>
        <a href="#" className="btn card-btn"
          onClick={() => { setProInfo(pro) }}
        >More</a>
      </div>
    </div>
  )
}

export default ProCard;