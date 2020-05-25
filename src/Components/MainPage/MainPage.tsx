import React from 'react';
import {Col, Row, Layout} from "antd";
import LatestNews from "../LatestNews/LatestNews";
import styles from './MainPage.module.css';

function MainPage() {
    return (
        <Layout className={styles.layout}>
            <Layout.Content style={{padding: "15px"}}>
                <Row>
                    <Col className={styles.column}>
                        <h1>Latest News in the past 5 min</h1>
                        <LatestNews/>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    );
}

export default MainPage;