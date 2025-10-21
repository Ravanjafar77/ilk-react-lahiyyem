import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import "./Elements.css";

function Elements() {
  return (
    <>
      <div className="Services">
        <h2 className="Our-services">Our Services</h2>
        <p className="our-paragraf">
          Eu sit proin amet quis malesuada vitae elit.Vel consectetur nibh{" "}
          <br />
          quis ullamcorper quis. Quam enim tortor, id sed
        </p>
      </div>
      <div className="all-services">
        <div className="Counseling">
          <img src="Group.png" className="Group-photo" alt="Counseling" />
          <h3 className="Counseling2">Counseling</h3>
          <p className="Counseling-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.
          </p>
        </div>
        <div className="Support-groups">
          <img src="Shield.png" className="sheild-photo" alt="Support groups" />
          <h3 className="Support-groups2">Support groups</h3>
          <p className="Support-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.{" "}
          </p>
        </div>
        <div className="Prescription-medicine">
          <img
            src="Pills.png"
            className="Pills-photo"
            alt="Prescription medicine"
          />
          <h3 className="medicine">Prescription medicine</h3>
          <p className="medicine-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.{" "}
          </p>
        </div>
        <div className="Therapies">
          <img src="ThermoGun.png" alt="Therapies" />
          <h3 className="Therapies2">Therapies</h3>
          <p className="therapies-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.{" "}
          </p>
        </div>
        <div className="Brain-stimulation">
          <img src="Hospital.png" alt="Brain stimulation" />
          <h3 className="Brain">Brain stimulation</h3>
          <p className="Brain-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.{" "}
          </p>
        </div>
        <div className="Eye-Movement">
          <img src="Stetoscope.png" alt="Eye Movement" />
          <h3 className="eyes2">Eye Movement</h3>
          <p className="Eyes-paragraf">
            Eu sit proin amet quis malesuada vitae elit.
            <br />
            Vel consectetur nibh quis ullamcorper quis.
            <br />
            Quam enim tortor.{" "}
          </p>
        </div>
      </div>
      <div className="rectangle-container">
        <div className="rectangle">
          <p className="rectangle-paragraf">Need a doctor's counseling?</p>
          <h4 className="rectangle-h4">
            Just make an appointment <br />
            and motivated
          </h4>
          <button className="rectangle-button">Get Appointment</button>
        </div>
      </div>
      <div class="testimonialtext1">
        <h2 class="texth2">What Our Client’s Say</h2>
        <p class="textp1">
          Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh{" "}
          <br />
          quis ullamcorper quis. Quam enim tortor, id sed
        </p>
      </div>

      <div class="Testimonial">
        <div class="tetsmonial-block">
          <img src="ellipsephoto.png.png" class="ellipse" alt="Client Photo" />
          <h6 class="ellipsename">Floyd Miles</h6>
          <p class="eliipse-date">24 May, 2020</p>
          <p class="eliipse-paragraf">
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper
            <br />
            quis. Quam enim tortor. Eu sit proin amet quis malesuada vitae elit.
            Vel consectetur
            <br />
            nibh quis ullamcorper quis. Quam enim tortor. Eu sit proin amet quis
            malesuada vitae
            <br />
            elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor.
          </p>
          <div class="stars">★★★★★</div>
        </div>
      </div>
      <div className="left-arrow">
        <img src="arrow-left.png " className="left"></img>
      </div>
      <div className="right-arrow">
        <img src="arrow-right.png" className="right"></img>
      </div>

      <div className="take-our-services-container">
        <div className="take-text">
          <h2 className="takeh2">Why Should you take our services</h2>
          <p className="takep">
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            <br />
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
        </div>
        <div className="take-about">
          <img src="group8.png" className="take-photo"></img>
          <div className="feature-contanier">
            <h3 className="feature">
              Experience
              <span className="chekbox">
                <i class="fas fa-check-circle"></i>
              </span>
            </h3>
            <p className="featuer-text">
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              <br />
              quis ullamcorper quis. Quam enim tortor, id sed
            </p>
            <h3 className="feature">
              Commitment
              <span className="chekbox">
                <i class="fas fa-check-circle"></i>
              </span>
            </h3>
            <p className="featuer-text">
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              <br />
              quis ullamcorper quis. Quam enim tortor, id sed
            </p>
            <h3 className="feature">
              Facilities
              <span className="chekbox">
                <i class="fas fa-check-circle"></i>
              </span>
            </h3>
            <p className="featuer-text">
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              <br />
              quis ullamcorper quis. Quam enim tortor, id sed
            </p>
            <h3 className="feature">
              Relationships
              <span className="chekbox">
                <i class="fas fa-check-circle"></i>
              </span>
            </h3>
            <p className="featuer-text">
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              <br />
              quis ullamcorper quis. Quam enim tortor, id sed
            </p>
          </div>
        </div>

      
      </div>
      <div className="callback-section">
  <div className="callback-container">
    <div className="box-input">
      <div className="box-about">
        <p className="need-doctor">Need a doctor's counsealing?</p>
        <h2 className="callback-title">
          Request a Call Back<br/>
          Today Now
        </h2>
        <p className="need-doctor2">
          Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh<br/>
          quis ullamcorper quis. Quam enim tortor, id sed
        </p>
      </div>
      <div className="photo-paragraf">
        <img src="Ellipse6photo.png" className="photos" alt="Doctor 1" />
        <img src="Ellipse7photo.png" className="photos" alt="Doctor 2" />
        <img src="Ellipse8photo.png" className="photos" alt="Doctor 3" />
        <p className="photo-about">
          Our Doctors are waiting<br/>
          for your service.
        </p>
      </div>
    </div>

    <div className="form-section">
      <div className="form-group">
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="tel" placeholder="Your Phone Number" required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Date" required />
      </div>
      <button className="submit-btn">Request Now</button>
    </div>
  </div>
</div>
    </>
  );
}
export default Elements;
