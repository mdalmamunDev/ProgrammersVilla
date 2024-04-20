import heroImg from "../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src={heroImg} alt="" width="50%" />
      <h1 className="display-5 fw-bold text-body-emphasis">ProgrammersVilla</h1>
      <div className="col-lg-6 mx-auto">
        <hr />
        <p className="lead mb-4">Unlock the door to endless possibilities in the world of programming with ProgrammerVilla. Whether you're a seasoned developer or just starting your coding adventure, our platform is your ultimate destination htmlFor knowledge, inspiration, and community.Delve into the minds of the industry's brightest minds as they share their expertise, insights, and strategies htmlFor success. From groundbreaking projects to insider tips, ProgrammerVilla offers an exclusive glimpse into the world of top programmers.</p>
        <hr />
      </div>
    </div>
  )
}

export default Hero;