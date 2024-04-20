import icon from './../assets/img/app-icon.png'

const Header = ({ setRoot }) => {
  return (
    <div className="gradient shadow header">
      <nav className="py-2">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li
              className="nav-item"
              onClick={() => { setRoot("Home") }}
            >
              <a href="#" className="nav-link link-body-emphasis px-2 text-light active" aria-current="page">Home</a>
            </li>
            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-light">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-light">Pricing</a></li>
            <li
              className="nav-item"
              onClick={() => { setRoot("AddPro") }}
            >
              <a href="#" className="nav-link link-body-emphasis px-2 text-light">Add</a>
            </li>
            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-light">About</a></li>
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-light">Login</a></li>
            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2 text-light">Sign up</a></li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            <img className="bi me-0" src={icon} style={{
              width: "100px",
            }} />
            <span className="fs-1 text-light">ProgrammersVilla</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 header-search-input" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </header>
    </div>
  )
}

export default Header;