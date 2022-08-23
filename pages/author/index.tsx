import { Paper, Box, Container } from '@mui/material';
import { Card, Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import React from 'react';
function Author() {
    const onSearch = (value: string) => console.log(value);
    return (
        <>
            <Container maxWidth="md" style={{marginTop:20}}>
            <div className="site-card-wrapper">
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Add"
                    size="large"
                    onSearch={onSearch}
                />
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                         
                        </Card>
                    </Col>
                </Row>
            </div>
            </Container></>
    )

}
export default Author