import React from "react";

import PosterCarousal from "./PosterCarousal";
import FaqQuestion from "./FaqQuestion";
import VideoCard from "./VideoCard";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <PosterCarousal />

      <div className="container" style={{ marginTop: "25px" }}>
        <div className="Info">
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            About The Project
          </h1>

          <p style={{ fontSize: "18px", color: "grey", marginTop: "14px" }}>
            coin videos for free download. Browse or use the filters to find
            your next video clip for your project. Clown, Circus, 3D, Cartoon,
            Bitcoin.
          </p>
          <p style={{ fontSize: "18px", color: "grey" }}>
            coin videos for free download. Browse or use the filters to find
            your next video clip for your project. Clown, Circus, 3D, Cartoon,
            Bitcoin.coin videos for free download. Browse{" "}
          </p>
          <p style={{ fontSize: "18px", color: "grey" }}>
            coin videos for free download. Browse or use the filters to find
            your next video clip for your project. Clown, Circus, 3D, Cartoon,
            Bitcoin.coin videos for free download. Browse coin videos for free
            download. Browse or use the filters to find your next video clip for
            your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for
            free download. Browse coin videos for free download. Browse or use
            the filters to find your next video clip for your project. Clown,
            Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse
          </p>
          <p style={{ fontSize: "18px", color: "grey" }}>
            coin videos for free download. Browse or use the filters to find
            your next video clip for your project. Clown, Circus, 3D, Cartoon,
            Bitcoin.coin videos for free download. Browse coin videos for free
            download. Browse or use the filters to find your next video clip for
            your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for
            free download. Browse{" "}
          </p>
        </div>
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "40px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Top Projects
      </h1>
      <div
        style={{
          padding: "0 25px",
        }}
      >
        <VideoCard />
      </div>

      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "35px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Completed Projects
      </h1>

      <div
        style={{
          padding: "0 25px",
        }}
      >
        <VideoCard />
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "35px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        TOKENOMECS
      </h1>

      <img
        src="./Images/2.jpg"
        alt="tokenomecs"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "35px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Activities Projects
      </h1>

      <div
        style={{
          padding: "0 25px",
        }}
      >
        <VideoCard />
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "35px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        No Activities Projects
      </h1>

      <div
        style={{
          padding: "0 25px",
        }}
      >
        <VideoCard />
      </div>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "35px",
          marginBottom: "22px",
          textAlign: "center",
        }}
      >
        FAQ
      </h1>
      <div className="container">
        <FaqQuestion
          index="1"
          que="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin."
          ans="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse "
        />
        <FaqQuestion
          index="2"
          que="coin videos for free download. Browse or use the filters to find your next video clip"
          ans="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. "
        />
        <FaqQuestion
          index="3"
          que="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, "
          ans="Browse coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse "
        />
        <FaqQuestion
          index="4"
          que="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin."
          ans="coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse coin videos for free download. Browse or use the filters to find your next video clip for your project. Clown, Circus, 3D, Cartoon, Bitcoin.coin videos for free download. Browse "
        />
      </div>
      <div
        style={{
          marginTop: "40px",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Home;
