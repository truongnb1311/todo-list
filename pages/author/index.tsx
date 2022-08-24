import { Container } from '@mui/material';
import { Avatar, Button, List, Modal } from 'antd';
import React from 'react';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import "./Author.module.css"
import { getUsers, UserItem, deleteUser, createUser, updateUser } from '../../services/author';
import { Input } from 'antd';

function Author() {
    const [onEdit, setOnEdit] = useState(false)
    const ContainerHeight = 400;
    const [idEdit, setIdEdit] = useState('1')
    const [data, setData] = useState<UserItem[]>([]);
    const [text, setText] = useState('')
    const [textEdit, setTextEdit] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
            getUsers();
        }
    };
    const handleDelete = (id: any) => (e
        : React.MouseEvent<HTMLElement>) => {
        deleteUser(id)
        setData([...data.filter(value => value.id !== id)])
    }
    const handleCreate = () => {
        createUser(text)
        const newUserItem: UserItem = {
            id: '333',
            name: text,
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
            createAt: ''
        }
        console.log("text", text);
        setData([newUserItem, ...data])
        alert("thêm thành công")
    }
    const handleOk = (e
        : React.MouseEvent<HTMLElement>) => {
        setIsModalVisible(false);
        updateUser(idEdit, textEdit)
        setData([...data.map(item => {
            if (item.id === idEdit) item.name = textEdit
            return item
        })])
    };
    const handleOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleOnchangeInputEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextEdit(e.target.value)
    }
    const showModal = (id: any) => (e: React.MouseEvent<HTMLElement>) => {
        setIdEdit(id)
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        getUsers().then(data => setData(data))

    }, []);
    console.log(text);
    return (
        <>
            <Container maxWidth="md" style={{ marginTop: 20 }}>
                <div className="site-card-wrapper">
                    <Input.Group compact>
                        <Input
                            style={{ width: 'calc(100% - 58px)' }}
                            defaultValue="name"
                            value={text}
                            onChange={handleOnchangeInput}
                        />
                        <Button
                            type="primary"
                            onClick={handleCreate}>Add</Button>

                    </Input.Group>
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item: UserItem) => (
                                <List.Item key={item?.id}>
                                    <List.Item.Meta
                                        key={item?.id}
                                        avatar={<Avatar src={item?.avatar} />}
                                        title={!onEdit ? <a href="https://ant.design">{item?.name}</a> : <input />}
                                    />
                                    <div>
                                        <span
                                            style={{ margin: 20 }}
                                            onClick={showModal(item?.id)}
                                        >    <EditOutlined /></span>
                                        <Modal title="Edit name" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <Input.Group compact>
                                                <Input
                                                    style={{ width: 'calc(100% )' }}
                                                    defaultValue="name"
                                                    value={textEdit}
                                                    onChange={handleOnchangeInputEdit}
                                                />
                                            </Input.Group>

                                        </Modal>
                                        <span
                                            style={{ margin: 20 }}
                                            onClick={handleDelete(item?.id)}
                                        >    <DeleteOutlined /></span>
                                    </div>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </div>
            </Container></>
    )

}
export default Author