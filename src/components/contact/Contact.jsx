import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const latitude = 30.5161;
  const longitude = 76.6598;

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.001!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzfCsDU4JzAzLjkiTiA3NsKwNTYnNTQuMyJF!5e0!3m2!1sen!2suk!4v1652490503355!5m2!1sen!2suk`;

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={mapUrl} title="map"></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Chitkara University, Rajpura</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>Eduquest12@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 95xxxxxxxxx</p>
              </div>
            </div>

            <form>
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <div className="alert">
              {/* Your alert message here */}
            </div>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
