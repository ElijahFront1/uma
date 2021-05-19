import { Button, Col, PageHeader } from 'antd'
import React from 'react'
import '../scss/categories.scss';

function Categories() {
    return (
        <Col className="categories"
            xs={{ span: 0 }} sm={{ span: 4 }}>
            <PageHeader
                extra={[
                    <Button key="1">Одежда</Button>,
                    <Button key="2">Подборки</Button>,
                    <Button key="3">Детям</Button>,
                    <Button key="4">Книги</Button>,
                ]}
            />
        </Col>
    )
}

export default Categories
