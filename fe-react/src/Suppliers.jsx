import { Button, Modal, Spin, Table } from 'antd';
import { useState } from 'react';
import { baseService } from './env/Services/baseService';
import { useEffect } from 'react';

const SuppliersTable = () => {
    const [refresh, setRefresh] = useState(false);
    const [suppliers, setSuppliers] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [deleteID, setDeleteID] = useState(0);
    const [isSpinVisible, setIsSpinVisible] = useState(true);

    useEffect(() => {
        getSuppliers();
    }, [refresh]);

    const getSuppliers = async () => {
        try {
            let data = await baseService.get('/suppliers');
            const modifiedSuppliers = data.map((supplier) => {
                const { address } = supplier;
                return { ...supplier, city: address.city };
            });
            setSuppliers(modifiedSuppliers);
            setIsSpinVisible(false);

        } catch (error) {
            console.log('suppliers get error', error);
        }
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            key: 'contactName',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
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

    const deleteSupplier = async (id) => {
        if (id) {
            try {
                await baseService.delete(`/suppliers/${id}`);
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
        await deleteSupplier(deleteID);
        setIsModalVisible(false);
    };
    return (
        <>
            <Spin tip='Loading...' spinning={isSpinVisible}>
                <Table
                    columns={columns}
                    dataSource={suppliers}
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

                    onOk={handleOk}>
                    Are you sure?
                </Modal>
            </Spin>
        </>
    );
};

export default SuppliersTable;