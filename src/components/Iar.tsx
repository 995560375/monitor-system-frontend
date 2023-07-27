import React, {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Modal } from 'antd';
import TableComponent from './Table';
import {Task} from "@/api/types";
import apiService from "@/api/apiService";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }
//
//
//
// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'IAR1',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'IAR2',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'IAR3',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const Iar: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    apiService.getAllTasks()
        .then(fetchedTasks => {
          const tasksWithKeys = fetchedTasks.map((task) => ({
            ...task,
            key: task.TrackNumber,
          }));
          setTasks(tasksWithKeys);
          // console.log(fetchedTasks)
          // console.log(tasks)
        })
        .catch(error => {
          console.error('An error occurred while fetching tasks:', error);
        });
  }, []);

  const showModal = () => {
    console.log("11111111111111")
    setIsModalVisible(true);
  };

  const columns: ColumnsType<Task> = [
    {
      title: 'Name',
      dataIndex: 'TrackNumber',
      key: 'trackNumber',
      render: (text) => <a onClick={showModal}>{text}</a>,
    },
    // {
    //   title: '111',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //       <>
    //         {tags.map((tag) => {
    //           let color = tag.length > 5 ? 'geekblue' : 'green';
    //           if (tag === 'loser') {
    //             color = 'volcano';
    //           }
    //           return (
    //               <Tag color={color} key={tag}>
    //                 {tag.toUpperCase()}
    //               </Tag>
    //           );
    //         })}
    //       </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //       <Space size="middle">
    //         <a>Invite {record.name}</a>
    //         <a>Delete</a>
    //       </Space>
    //   ),
    // },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columnsWithModal: ColumnsType<Task> = columns.map((column) => {
    if (column.key === 'trackNumber') {
      return {
        ...column,
        render: (text: React.ReactNode) => <a onClick={showModal}>{text}</a>,
      };
    }
    return column;
  });

  return (
      <div>
        <Table columns={columnsWithModal} dataSource={tasks} />
        <Modal title="Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="80%">
          <TableComponent />
        </Modal>
      </div>
  );
};

export default Iar;