import React from 'react';
import AppContent from '../../shared/components/Layout/Content';
import { Col, Row } from 'antd';
import DataDisplay from '../../shared/components/DataDisplay';

const Home = () => {
  return (
    <AppContent>
      <Row>
        <Col span={8}>
          <DataDisplay.Card title="Hello Test">Hello</DataDisplay.Card>
        </Col>
      </Row>
    </AppContent>
  );
};

export default Home;
