import { Button, Modal, Spin, Table } from 'antd';
import { useState } from 'react';
import { baseService } from '../network/services/baseService';
import { useEffect } from 'react';

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [deleteID, setDeleteID] = useState(0);
    const [isSpinVisible, setIsSpinVisible] = useState(true);

    useEffect(() => {
        getCategories();
    }, [refresh]);

    const getCategories = async () => {
        try {
            let data = await baseService.get('/categories');
            setCategories(data);
            setIsSpinVisible(false);
        } catch (error) {
            console.log('CategoryTable get error', error);
        }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            render: (_, item) => (
                <Button
                    type='primary'
                    danger
                    onClick={() => onDeleteClick(item.id)}>
                    Delete
                </Button>
            ),
        },
    ];

    const onDeleteClick = (id) => {
        setDeleteID(id);
        setIsModalVisible(true);
    };

    const deleteCategory = async (id) => {
        if (id) {
            try {
                await baseService.delete(`/categories/${id}`);
                setRefresh((prev) => !prev);
            } catch (error) {
                console.log('CategoryTable delete error: ', error);
            }
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = async () => {
        await deleteCategory(deleteID);
        setIsModalVisible(false);
    };
    return (
        <>
            <Spin tip='Loading...' spinning={isSpinVisible}>
                <Table
                    columns={columns}
                    dataSource={categories}
                    rowKey={'id'}
                    pagination={{
                        pageSizeOptions: [2, 4, 5, 6, 10],
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        defaultCurrent: 2,
                    }}
                />
                <Modal
                    open={isModalVisible}
                    title='Delete Category'
                    onCancel={handleCancel}
                    // maskClosable={false}
                    onOk={handleOk}>
                    Are you sure?
                </Modal>
            </Spin>
        </>
    );
};

export default CategoryTable;
