import React from "react";
import styles from './NewsCard.module.css';
import {Card, Col, Divider, Row, Tag, Tooltip} from "antd";
import News from "../../Model/News";

export interface NewsCardProps {
    news: News;
}

function NewsCard({ news }: NewsCardProps) {
    return (
        <Card
            className={styles.card}
            hoverable
            id={news._id}
            bordered={false}
            title={
                <Tooltip
                    title={news._title}
                    placement='topLeft'
                ><span>{news._title}</span></Tooltip>
            }
            cover={<img loading='eager' src={news._image} alt={news._title}/>}
            onClick={()=> window.open(news._url)}
        >
            <Row align='middle' gutter={16}>
                <Col>
                    <Row align='middle' justify='center'>
                        <Col>
                            <Card.Meta
                                description={news._description}
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <Row align='middle' justify='center'>
                        <Col>
                            <h5>Author: {news._author || 'N/A'}</h5>
                        </Col>
                    </Row>
                    <Row align='middle' justify='center'>
                        <Col>
                            <h5>Published on</h5>
                        </Col>
                    </Row>
                    <Row align='middle' justify='center'>
                        <Col>
                            <h6>{news._published}</h6>
                        </Col>
                    </Row>
                    <Divider style={{ color: "white" }}/>
                    <Row align='middle' justify='center'>
                        {news._category.map((value, index) => (
                            <Col>
                                <Tag key={index.toString()} >{value.toUpperCase()}</Tag>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </Card>
    );
}

export default NewsCard;
