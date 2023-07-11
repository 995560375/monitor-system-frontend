import React from 'react';
import { Divider, List, Typography } from 'antd';

const data = [
    'Failure1',
    'Failure2',
    'Failure3',
    'Failure4',
    'Failure5',
];

const Failures: React.FC = () => (
    <>
        <Divider orientation="left">Failures</Divider>
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
        />

    </>
);

export default Failures;