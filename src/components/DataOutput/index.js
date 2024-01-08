import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

const DataOutput = ({ data }) => {
  return (
    <div className="data-box">
      <Row>
        <Col lg={3} className="vertical-line">
          <h6>IP ADDRESS</h6>
          <h5>{data.ip}</h5>
        </Col>
        <Col lg={3} className="vertical-line">
          <h6>LOCATION</h6>
          <h5>
            {data?.location?.country} {data?.location?.region}
          </h5>
        </Col>
        <Col lg={3} className="vertical-line">
          <h6>TIMEZONE</h6>
          <h5>{data?.location?.timezone}</h5>
        </Col>
        <Col lg={3}>
          <h6>ISP</h6>
          <h5>{data.isp}</h5>
        </Col>
      </Row>
    </div>
  );
};

export default DataOutput;
