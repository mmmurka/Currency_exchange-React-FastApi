import React, {useEffect, useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios, {Axios} from "axios";
import CryptocurrencyCard from "./CryptocurrencyCard.jsx";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const App = () => {

  const [currencies, setCurrencies] = useState([]);
  const fetchCurrencies = () => {
      axios.get('http://127.0.0.1:8000/cryptocurrencies').then(r  => {
          const currenciesResponse = r.data
          const menuItems = [
              getItem('Список криптовалют 1', 'g1', null, currenciesResponse.map(c => {
                  return {label: c.name, key: c.id}
              }),
                  'group'
              )
          ]
          setCurrencies(menuItems)
      })
  }

    useEffect(() => {
        fetchCurrencies()
    }, []);
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="flex">
            <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={currencies}
      className="h-screen overflow-scroll"
    />
        <div className="mx-auto my-auto">
            <CryptocurrencyCard/>
        </div>
    </div>
  );
};
export default App;