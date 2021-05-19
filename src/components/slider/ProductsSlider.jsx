import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelection } from '../../store/selectionReducer.js';
import { Button, Col, Row } from 'antd';
import '../../scss/multipleRows.scss';

function ProductsSlider() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSelection())
    }, [])

    const selection = useSelector(({ selectionReducer }) => selectionReducer.selection.list)

    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <Row >
            <Col span={24}>
                <Row>
                    <Col
                        style={{
                            width: '100%',
                        }}>
                        <Row>
                            <Col className="multiple-rows"
                                style={{ width: '100%' }}>
                                <Col style={{
                                    fontSize: 16,
                                    color: '#171717',
                                    paddingLeft: 8
                                }}>
                                    Где купить похожее?
                            </Col>
                                <Slider {...settings}>
                                    {selection && selection.map(obj =>
                                        <Row key={obj.id}>
                                            <Col to={`${obj.uproduct.xref}`}
                                                style={{
                                                    height: 169,
                                                    fontFamily: 'Montserrat',
                                                    display: 'flex',
                                                }}>
                                                <Row style={{
                                                    border: '1px solid #EBEBEB',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignContent: 'space-around',
                                                    boxSizing: 'content-box',
                                                    margin: 7
                                                }}>
                                                    <Col style={{
                                                        textTransform: 'uppercase',
                                                        fontWeight: 'bold',
                                                        fontSize: '10px',
                                                        maxWidth: '90%',
                                                        maxHeight: 20,
                                                        textAlign: 'center',
                                                    }}>
                                                        {obj.uproduct.shopName}
                                                    </Col>
                                                    <Col style={{ padding: 4 }}>
                                                        <img src={obj.imgUrl} alt="example"
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                maxHeight: 115,
                                                                maxWidth: 115,
                                                            }} />
                                                    </Col>
                                                    <Col style={{
                                                        textTransform: 'uppercase',
                                                        fontSize: 10,
                                                        fontWeight: 'normal',
                                                        color: '#000'
                                                    }}>
                                                        {obj.uproduct.price}
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                width: 88,
                                                height: 28,
                                                boxSizing: 'content-box',
                                                margin: '0 auto',
                                                marginTop: 3,
                                                marginBottom: 9,
                                            }}>
                                                <Button>В магазин</Button>
                                            </Col>
                                        </Row>
                                    )}
                                </Slider>
                            </Col >
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductsSlider