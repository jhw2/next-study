import Image from 'next/image';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [lists, setList] = useState([]);

  const getDataList = ()=>{
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then(({data}) => {
      console.log(data)
      setList(data);
    });
  }

  useEffect(()=>{
    getDataList();
  },[]);

  return (
    <div>
        <Header as='h2'>신상품</Header>
        <ItemList lists={lists.slice(0,8)} />

        <Header as='h2'>일반상품</Header>
        <ItemList lists={lists.slice(8)} />
    </div>
  )
}
