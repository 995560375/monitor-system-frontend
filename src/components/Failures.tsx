import React, {useEffect, useState} from 'react';
import { Divider, List, Typography } from 'antd';
import apiService from "@/api/apiService";
import {Failure} from "@/api/types";

const Failures: React.FC = () => {
    const [data, setData] = useState<Failure[]>([]);

    useEffect(() => {
        const fetchFailures = async () => {
            try {
                const response = await apiService.getFailures(); // gets failures from page 0 with size 10
                const responseData: Failure[] = response.data.content;
                setData(responseData)
                console.log(responseData);
            } catch (error) {
                console.error('Failed to fetch failures:', error);
            }
        };

        fetchFailures();
    }, []);

    // const data = [
    //     'Failure1',
    //     'Failure2',
    //     'Failure3',
    //     'Failure4',
    //     'Failure5',
    // ];

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
                        <Typography.Text mark>[ITEM]</Typography.Text> {item.description} - {item.createdAt}
                    </List.Item>
                )}
            />
        </>
    );
};

export default Failures;
