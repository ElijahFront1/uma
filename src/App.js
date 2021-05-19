import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useDispatch } from "react-redux";
import './App.css';
import Categories from './components/Categories';
import UserBar from './components/UserBar';
import { fetchUser } from './store/userReducer';
import Selection from './components/Selection';
import { fetchSelection } from './store/selectionReducer';
import ProductsSlider from './components/slider/ProductsSlider';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchSelection())
  }, [])

  return (
    <Row style={{ paddingTop: 31, fontFamily: 'Arsenal', maxWidth: 1960, margin: '0 auto' }}>
      <Col xs={24} sm={4} md={4} lg={4} xl={4}>
        <UserBar />
      </Col>
      <Col xs={24} sm={16} md={16} lg={16} xl={16}>
        <Row>
          <Categories />
        </Row>
        <Row >
          <Col lg={{ span: 22, offset: 0 }} xl={{ span: 11, offset: 0 }}>
            <Selection />
          </Col>
          <Col lg={{ span: 22, offset: 0 }} xl={{ span: 11, offset: 2 }}>
            <ProductsSlider />
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 24 }}></Col>
    </Row>
  )
}

export default App;
