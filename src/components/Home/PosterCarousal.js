import React, { useState } from "react";

import { Carousel, Button } from "react-bootstrap";

import styles from "./Carousal.module.css";

const PosterCarousal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"./Images/5.jpg"})`,
            backgroundSize: "cover",
            width: "100%",
            height: "500px",
          }}
        >
          <div className={styles.txt}>
            <h1>Watch & Earn</h1>
            <br />
            <p style={{ fontSize: "18px" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.
            </p>

            <p style={{ fontSize: "18px", lineHeight: "1.5rem" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.coin videos for free download. Browse{" "}
            </p>

            <Button className={styles.btn}>Watch Now</Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"./Images/1.jpg"})`,
            backgroundSize: "cover",
            width: "100%",
            height: "500px",
          }}
        >
          <div className={styles.txt}>
            <h1>Watch & Earn</h1>
            <br />
            <p style={{ fontSize: "18px" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.
            </p>

            <p style={{ fontSize: "18px", lineHeight: "1.5rem" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.coin videos for free download. Browse{" "}
            </p>

            <Button className={styles.btn}>Watch Now</Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${"./Images/4.jpg"})`,
            backgroundSize: "cover",
            width: "100%",
            height: "500px",
          }}
        >
          <div className={styles.txt}>
            <h1>Watch & Earn</h1>
            <br />
            <p style={{ fontSize: "18px" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.
            </p>

            <p style={{ fontSize: "18px", lineHeight: "1.5rem" }}>
              coin videos for free download. Browse or use the filters to find
              your next video clip for your project. Clown, Circus, 3D, Cartoon,
              Bitcoin.coin videos for free download. Browse{" "}
            </p>

            <Button className={styles.btn}>Watch Now</Button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default PosterCarousal;
