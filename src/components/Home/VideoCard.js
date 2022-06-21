import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const VideoCard = () => {
  return (
    <>
      <Row xs={2} md={4} className=" g-4 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="./Images/video.jpg"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text
                  className="text-center"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Watch & Earn Project
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default VideoCard;
