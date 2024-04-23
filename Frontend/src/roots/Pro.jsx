import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../assets/img/pro_2.jpg'
import { faAsterisk, faBars, faBriefcase, faBug, faCalendar, faCertificate, faCircleLeft, faCode, faEnvelope, faGlassWaterDroplet, faHome, faPenToSquare, faPhone, faSuitcase, faTableList } from '@fortawesome/free-solid-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import toast from 'react-hot-toast';


const Pro = ({ setRoot, proList, setProList, pro, setPro }) => {

  if (!pro) return <h1>No data to show</h1>

  const handleDrop = async (e) => {
    e.preventDefault();
    console.log(54444);
    await axios
      .post(`http://localhost:3000/programmer/dropProgrammer`, { id: pro._id })
      .then((res) => {
        if (res.data) {
          console.log(res.data.message);
          toast.success("Deleted Successfully");
          //update proList
          setProList(proList.filter(programmer => programmer._id !== pro._id));
          setPro(undefined);
          setRoot('Home');
          console.log(654);
        }
        // localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="pb-5 pt-1">

      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{
        maxWidth: "1400px",
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FontAwesomeIcon icon={faCircleLeft} className='fa-fw w3-margin-right w3-xxlarge mb-2 my-icon pro-btn-back'
            onClick={() => {
              setPro(undefined);
              setRoot('Home');
            }} />

          <div className="dropdown">
            <FontAwesomeIcon icon={faBars} className='fa-fw w3-margin-right w3-xxlarge mb-2 my-icon' />
            <div className="dropdown-content">
              <a href="#" className='dropdown-content-single my-icon'
                onClick={() => {
                  setRoot('EditPro');
                }}>
                <FontAwesomeIcon icon={faPenToSquare} className='fa-fw w3-large' />
                Edit
              </a>
              <form className='dropdown-content-single' onSubmit={handleDrop} method='POST'>
                <button className='my-icon' style={{ border: 'none', background: 'none', padding: '0px' }}>
                  <FontAwesomeIcon icon={faGlassWaterDroplet} className='fa-fw w3-large' />
                  Drop
                </button>
              </form>
              <a href="#" className='dropdown-content-single my-icon'>
                <FontAwesomeIcon icon={faBug} className='fa-fw w3-large' />
                Report
              </a>
            </div>
          </div>
        </div>

        {/* The Grid */}
        <div className="row">

          {/* Left Column */}
          <div className="col-4" style={{ height: '100%' }}>

            <div className="w3-white about-heading w3-card-4">
              <div className="w3-display-container">
                <img src={pro.img ? `uploads/${pro.img}` : img} style={{
                  width: "100%",
                }} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2 className='about-pro-name text-light'>{pro.name}</h2>
                </div>
              </div>
              <div className="w3-container py-2">
                <p> <FontAwesomeIcon icon={faCode} className='fa-fw w3-margin-right w3-large  my-icon' />Programmer</p>
                <p><FontAwesomeIcon icon={faBriefcase} className='fa-fw w3-margin-right w3-large  my-icon' />Designer</p>
                <p><FontAwesomeIcon icon={faHome} className='fa-fw w3-margin-right w3-large  my-icon' />{pro.address}</p>
                <p><FontAwesomeIcon icon={faEnvelope} className='fa-fw w3-margin-right w3-large  my-icon' />ex@mail.com</p>
                <p><FontAwesomeIcon icon={faPhone} className='fa-fw w3-margin-right w3-large  my-icon' />1224435534</p>
                <hr />

                <p className="w3-large"><b><FontAwesomeIcon icon={faAsterisk} className='fa-fw w3-margin-right  my-icon' />Skills</b></p>
                <p className='mb-1'>Problem Solving</p>
                <div className="w3-light-grey w3-round-xlarge w3-small mb-3">
                  <div className="w3-container w3-center w3-round-xlarge progress-bar" style={{
                    width: "90%",
                  }}>90%</div>
                </div>
                <p className='mb-1'>Communication</p>
                <div className="w3-light-grey w3-round-xlarge w3-small mb-3">
                  <div className="w3-container w3-center w3-round-xlarge progress-bar" style={{
                    width: "80%",
                  }}>
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p className='mb-1'>Mathematics</p>
                <div className="w3-light-grey w3-round-xlarge w3-small mb-3">
                  <div className="w3-container w3-center w3-round-xlarge progress-bar" style={{
                    width: "75%",
                  }}>75%</div>
                </div>
                <p className='mb-1'>Media</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge progress-bar" style={{
                    width: "50%",
                  }}>50%</div>
                </div>
                <br />

                <p className="w3-large w3-text-theme"><b><FontAwesomeIcon icon={faCodepen} className='fa-fw w3-margin-right  my-icon' />Languages</b></p>
                <p className='mb-1'>Java</p>
                <div className="w3-light-grey w3-round-xlarge mb-3">
                  <div className="w3-round-xlarge progress-bar" style={{
                    height: "24px",
                    width: "100%",
                  }}></div>
                </div>
                <p className='mb-1'>C++</p>
                <div className="w3-light-grey w3-round-xlarge mb-3">
                  <div className="w3-round-xlarge progress-bar" style={{
                    height: "24px",
                    width: "55%",
                  }}></div>
                </div>
                <p className='mb-1'>JavaScript</p>
                <div className="w3-light-grey w3-round-xlarge mb-3">
                  <div className="w3-round-xlarge progress-bar" style={{
                    height: "24px",
                    width: "25%",
                  }}></div>
                </div>
                <br />
              </div>
            </div><br />

            {/* End Left Column */}
          </div>

          {/* Right Column */}
          <div className="col-8 w3-twothird">

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="about-heading w3-padding-16"><FontAwesomeIcon icon={faTableList} className='fa-fw w3-margin-right w3-xxlarge  my-icon' />Basic Info</h2>
              <div className="w3-container">
                <h5 className="about-heading"><b>Summary</b></h5>
                <p>{pro.about}</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>Born</b></h5>
                <p>{pro.born}</p>
                <hr />
              </div>
              {pro.died &&
                <div className="w3-container">
                  <h5 className="about-heading"><b>Died</b></h5>
                  <p>{pro.died}</p>
                  <hr />
                </div>
              }
              <div className="w3-container">
                <h5 className="about-heading"><b>Parents</b></h5>
                <p>{pro.parents}</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>Awards</b></h5>
                <p>{pro.awards}</p><br />
              </div>
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="about-heading w3-padding-16">
                <FontAwesomeIcon icon={faCertificate} className='fa-fw w3-margin-right w3-xxlarge my-icon' />Education</h2>
              <div className="w3-container">
                <h5 className="about-heading"><b>{pro.education}</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  Forever</h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>London Business School</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  2013 - 2015</h6>
                <p>Master Degree</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>School of Coding</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  2010 - 2013</h6>
                <p>Bachelor Degree</p><br />
              </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="about-heading w3-padding-16">
                <FontAwesomeIcon icon={faSuitcase} className='fa-fw w3-margin-right w3-xxlarge  my-icon' />
                Work Experience</h2>
              <div className="w3-container">
                <h5 className="about-heading"><b>Front End Developer / Facebook</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  Jan 2015 - <span className="w3-tag w3-round bg-primary-light">Current</span></h6>
                <p>This program, hosted by Meta for Business, offers training for aspiring Front-End Developers. You’ll learn how to code and gain essential web development skills. The best part? No degree or prior experience is required.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>Web Developer / something.com</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  Mar 2012 - Dec 2014</h6>
                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit
                  sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="about-heading"><b>Graphic Designer / designsomething.com</b></h5>
                <h6 className="my-text-2">
                  <FontAwesomeIcon icon={faCalendar} className='fa-fw w3-margin-right' />
                  Jun 2010 - Mar 2012</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
              </div>
            </div>

            {/* End Right Column */}
          </div>

          {/* End Grid */}
        </div>

        {/* End Page Container */}
      </div>
    </div>
  );
}

export default Pro;