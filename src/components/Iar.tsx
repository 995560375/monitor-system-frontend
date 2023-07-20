import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Modal } from 'antd';
import TableComponent from './Table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}



const data: DataType[] = [
  {
    key: '1',
    name: 'IAR1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'IAR2',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'IAR3',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Iar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    console.log("11111111111111")
    setIsModalVisible(true);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a onClick={showModal}>{text}</a>,
    },
    {
      title: '111',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
              );
            })}
          </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
      ),
    },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columnsWithModal: ColumnsType<DataType> = columns.map((column) => {
    if (column.key === 'name') {
      return {
        ...column,
        render: (text: React.ReactNode) => <a onClick={showModal}>{text}</a>,
      };
    }
    return column;
  });

  return (
      <div>
        <Table columns={columnsWithModal} dataSource={data} />
        <Modal title="Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="80%">
          <TableComponent />
        </Modal>
      </div>
  );
};

export default Iar;