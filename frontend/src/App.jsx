import React, {useEffect} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios, {Axios} from "axios";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('Список криптовалют 1', 'g1', null, [getItem('Option 1', '1'),
      getItem('Option 2', '2')], 'group'),
];
const App = () => {

  const fetchCurrencies = () => {
      axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r  => {
          console.log('response', r);
      })
  }

    useEffect(() => {
        fetchCurrencies()
    }, []);
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;