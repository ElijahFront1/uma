import { Col, Row } from 'antd'
import React from 'react'
import '../scss/selection.scss'

function Selection() {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col className="selection-title" style={{
                        fontSize: 16,
                        color: '#171717'
                    }} >
                        Подборка платьев
                    </Col>
                    <Col span={24} style={{
                    }}>
                        <Row>
                            <Col style={{
                                width: '100%',
                                height: 405,
                                border: '1px solid #EBEBEB',
                            }}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Selection
