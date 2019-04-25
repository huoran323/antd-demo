import React, { Component } from "react";
import { Row, Col, Card, Icon, Tooltip, Button } from "antd";
// import "antd/dist/antd.css";
import "./index.less";

export default class Analysis extends Component {
  render() {
    return (
      <div className="mainContent">
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <Card>
              <div className="main-content">
                <span>总销售额</span>
                <Tooltip title="指标说明">
                  <span className="tooltip">
                    <Icon type="info-circle" />
                  </span>
                </Tooltip>
                <div className="content-data">
                  <span>¥ 126,560</span>
                </div>
              </div>
              <div className="main-chart">
                <div className="main-chart-data">
                  <span>周同比 12%</span>
                  <span style={{ marginLeft: 12 }}>日同比 11%</span>
                </div>
              </div>
              <div className="main-bottom">
                <div>
                  <span>日销售额</span>
                  <span style={{ marginLeft: 8, color: "#333" }}>¥12,423</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <Card>
              <div className="main-content">
                <span>访问量</span>
                <Tooltip title="指标说明">
                  <span className="tooltip">
                    <Icon type="info-circle" />
                  </span>
                </Tooltip>
                <div className="content-data">
                  <span>8,846</span>
                </div>
              </div>
              <div className="main-chart">
                <div className="main-chart-data">
                  <span>周同比 12%</span>
                  <span style={{ marginLeft: 12 }}>日同比 11%</span>
                </div>
              </div>
              <div className="main-bottom">
                <div>
                  <span>日访问量</span>
                  <span style={{ marginLeft: 8, color: "#333" }}>1,423</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <Card>
              <div className="main-content">
                <span>支付笔数</span>
                <Tooltip title="指标说明">
                  <span className="tooltip">
                    <Icon type="info-circle" />
                  </span>
                </Tooltip>
                <div className="content-data">
                  <span>6,560</span>
                </div>
              </div>
              <div className="main-chart">
                <div className="main-chart-data">
                  <span>周同比 12%</span>
                  <span style={{ marginLeft: 12 }}>日同比 11%</span>
                </div>
              </div>
              <div className="main-bottom">
                <div>
                  <span>转化率</span>
                  <span style={{ marginLeft: 8, color: "#333" }}>60%</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <Card>
              <div className="main-content">
                <span>运营活动效果</span>
                <Tooltip title="指标说明">
                  <span className="tooltip">
                    <Icon type="info-circle" />
                  </span>
                </Tooltip>
                <div className="content-data">
                  <span>78%</span>
                </div>
              </div>
              <div className="main-chart">
                <div className="main-chart-data">
                  <span>周同比 12%</span>
                  <span style={{ marginLeft: 12 }}>日同比 11%</span>
                </div>
              </div>
              <div className="main-bottom">
                <div>
                  <span>周同比</span>
                  <span style={{ marginLeft: 8, color: "#333" }}>12%</span>
                  <span style={{ marginLeft: 12 }}>日同比</span>
                  <span style={{ marginLeft: 8, color: "#333" }}>11%</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
