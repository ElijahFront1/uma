import React from 'react'
import { Avatar, Col, Row } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import '../scss/userBar.scss';
import { useSelector } from 'react-redux';

function UserBar() {
    const user = useSelector(({ userReducer }) => userReducer.user)

    return (
        <Row justify="center"
            className="user-bar"
            style={{
                fontSize: 12,
                width: '100%',
            }}>
            <base target="_blank"></base>
            <Col xs={{ span: 12 }} sm={{ span: 24 }}>
                < a href={`http://instagram.com/_u/${user.extUserUrl}`}>
                    <Col align="center">
                        <Avatar
                            size={{ xs: 86, sm: 86, md: 100, lg: 100, xl: 118, xxl: 118 }}
                            icon={<AntDesignOutlined />}
                            src={user.photoUrl}
                        />
                        <Col style={{
                            fontSize: 18,
                        }}>
                            {`@${user.extUserUrl}`}
                        </Col>
                    </Col>
                </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 24 }}>
                <Col className="author-links"
                    style={{
                        width: 118,
                        margin: '0 auto',
                    }}>
                    <Col style={{
                        borderBottom: '1px solid #000',
                        paddingTop: 3,
                        paddingBottom: 5,
                        marginBottom: 3,
                        fontSize: 14,
                        color: '#000',
                    }}>
                        Ссылки автора
                    </Col>
                    <Col>
                        <a href={user.mysite}>Мой сайт</a>
                        <a href={`https://api.whatsapp.com/send?phone=${user.phone}`}>WhatsApp</a>
                        <a href={`tg://msg?text=<?php echo urlencode( '<TEXT>' ); ?>&to=${user.phone}`}>Telegram</a>
                        <a href={`mailto:${user.email}`}>Сотрудничество</a>
                    </Col>
                </Col>
            </Col>
        </Row >
    )
}

export default UserBar
