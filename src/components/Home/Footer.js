import React from "react";

import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="footer"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          alignText: "center",
        }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                <FaInstagram
                  style={{
                    marginRight: "10px",
                  }}
                  size={40}
                />
                <FaFacebook
                  size={40}
                  style={{
                    marginRight: "10px",
                  }}
                />
                <FaTwitter
                  size={40}
                  style={{
                    marginRight: "10px",
                  }}
                />
                <FaDiscord
                  size={40}
                  style={{
                    marginRight: "10px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <h1>Our Partners</h1>
            </div>
            <div className="col-md-4">
              <li>Laugh & Learn</li>
              <li>Watch & Earn</li>
              <li>More...</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
