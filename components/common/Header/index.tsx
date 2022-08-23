import React from "react"
import { Breadcrumb, MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { router } from '../../../routers'
import Link from "next/link";

function Header() {
    const items1: MenuProps['items'] = router.map((item) => ({
        key: item.key,
        label:<Link href={item.link}>
            
        <a>List{item.key}</a>
      </Link>,
    }));

    const { Header } = Layout;
    return (
        <>
        <Header className="header" style={{ background: 'white' }}>
            <div className="logo" />
            <Menu style={{ background: "white" }} mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </Header>
    
        </>
  
    )

}
export default Header