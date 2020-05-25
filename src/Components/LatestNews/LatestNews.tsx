import React from "react";
import News from "../../Model/News";
import {Alert, Button, List, Spin} from "antd";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import NewsCard from "../NewsCard/NewsCard";

const LATEST_NEWS = gql`
    query {
        latestNews {
            _status
            _news {
                _id
                _title
                _image
                _url
                _published
                _description
                _category
                _author
            }
        }
    }
`;

function LatestNews() {
    const { loading, error, data, refetch} = useQuery(LATEST_NEWS, {
        fetchPolicy: "no-cache",
        notifyOnNetworkStatusChange: true,
    });

    if(error) return (
        <Alert message={error.message}/>
    );

    if(loading) return (
        <Spin/>
    );

    return (
        <List
            grid={{
                xs: 1,
                sm: 1,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 3,
            }}
            header={<Button
                type='primary'
                shape='round'
                disabled={loading}
                onClick={() => refetch()}
            >
                Refresh
            </Button>}
            split={false}
            size='small'
            dataSource={data.latestNews._news}
            renderItem={(news: News) => {
                if(news._image && news._image !== 'None') return (
                    <List.Item>
                        <NewsCard news={news}/>
                    </List.Item>
                );
            }}
        />
    );
}

export default LatestNews;