import React, { useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import apiService from "@/api/apiService";

const Failures: React.FC = () => {
    useEffect(() => {
        const fetchFailures = async () => {
            try {
                const response = await apiService.getFailures(0, 10); // gets failures from page 0 with size 10
                console.log(response);
            } catch (error) {
                console.error('Failed to fetch failures:', error);
            }
        };

        fetchFailures();
    }, []);

    const data = [
        'Failure1',
        'Failure2',
        'Failure3',
        'Failure4',
        'Failure5',
    ];

    return (
        <>
            <Divider orientation="left">Failures</Divider>
            <List
                size="small"
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
};

export default Failures;
