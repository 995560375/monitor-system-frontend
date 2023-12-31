import { DownOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import './Table.css'

export type Status = {
    color: string;
    text: string;
};

const infoText = "1111111111111111111111111"

const statusMap = {
    0: {
        color: 'blue',
        text: '进行中',
    },
    1: {
        color: 'green',
        text: '已完成',
    },
    2: {
        color: 'volcano',
        text: '警告',
    },
    3: {
        color: 'red',
        text: 'failed',
    },
    4: {
        color: '',
        text: '未完成',
    },
};

export type TableListItem = {
    key: number;
    name: string;
    containers: number;
    creator: string;
    status: Status;
    createdAt: number;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {

    tableListDataSource.push({
        key: i,
        name: 'SubIARName',
        containers: Math.floor(Math.random() * 20),
        creator: creators[Math.floor(Math.random() * creators.length)],
        // @ts-ignore
        status: statusMap[Math.floor(Math.random() * 10) % 5],
        createdAt: Date.now() - Math.floor(Math.random() * 100000),
    });
}

const columns: ProColumns<TableListItem>[] = [
    {
        title: 'SubIAR',
        width: 120,
        dataIndex: 'name',
        render: (_) => <a>{_}</a>,
    },
    {
        title: '状态',
        width: 120,
        dataIndex: 'status',
        render: (_, record) => (
            <Tag color={record.status.color}>{record.status.text}</Tag>
        ),
    },
    {
        title: 'Error Tasks',
        width: 120,
        dataIndex: 'containers',
        align: 'right',
        sorter: (a, b) => a.containers - b.containers,
    },

    {
        title: 'User',
        width: 120,
        dataIndex: 'creator',
        valueEnum: {
            all: { text: '全部' },
            付小小: { text: '付小小' },
            曲丽丽: { text: '曲丽丽' },
            林东东: { text: '林东东' },
            陈帅帅: { text: '陈帅帅' },
            兼某某: { text: '兼某某' },
        },
    },
];

// Return the subRows that match the SubIAR.
const generateDataBasedOnRecord = (record: TableListItem) => {
    let data = [];
    // A simple rule: If containers > 10, show 3 items; otherwise show 1 item
    let numberOfItems = record.containers > 10 ? 3 : 1;

    for (let i = 0; i < numberOfItems; i++) {
        data.push({
            key: i,
            date: record.key,
            name: `Expanded data for ${record.name}`,
            upgradeNum: `Upgraded: ${i * 20}`,
            isError: Math.random() < 0.5
        });
    }

    return data;
};

const expandedRowRender = (record: TableListItem) => {
    // Use 'record' to generate different data for each expanded row
    const data = generateDataBasedOnRecord(record);
    return (
        <ProTable
            rowClassName={(record, index) => record.isError ? "error-row" : ""}
            columns={[
                { title: 'Date', dataIndex: 'date', key: 'date' },
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Error Type', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                {
                    title: 'Action',
                    dataIndex: 'operation',
                    key: 'operation',
                    valueType: 'option',
                    render: () => [<a key="Pause">Copy</a>, <a key="Stop">Detail</a>],
                },
            ]}
            headerTitle={false}
            search={false}
            options={false}
            dataSource={data}
            pagination={false}
        />
    );
};

export default () => {
    return (
        <>
        <p>{infoText}</p>
        <ProTable<TableListItem>
            columns={columns}
            request={(params, sorter, filter) => {
                // 表单搜索项会从 params 传入，传递给后端接口。
                console.log(params, sorter, filter);
                return Promise.resolve({
                    data: tableListDataSource,
                    success: true,
                });
            }}
            rowKey="key"
            pagination={{
                showQuickJumper: true,
            }}
            expandable={{ expandedRowRender: record => expandedRowRender(record) }}
            search={false}
            dateFormatter="string"
            headerTitle=""
            options={false}
            toolBarRender={() => [
                <Button key="show">查看日志</Button>,
                <Button key="out">
                    导出数据
                    <DownOutlined />
                </Button>,
                <Button key="primary" type="primary">
                    创建应用
                </Button>,
            ]}
        />
        </>
    );
};