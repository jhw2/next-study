import Image from 'next/image';
import axios from 'axios';
import { Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [lists, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataList = ()=>{
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then(({data}) => {
      setList(data);
      setLoading(false);
    });
  }

  useEffect(()=>{
    getDataList();
  },[]);

  return (
    <div>
        {isLoading && <Loader active>Loading</Loader>}
        {!isLoading &&
          <>
            <Header as='h2'>신상품</Header>
            <ItemList lists={lists.slice(0,8)} />
    
            <Header as='h2'>일반상품</Header>
            <ItemList lists={lists.slice(8)} />
          </>
        }
    </div>
  )
}

/*
빌드 시 딱 한번 api 요청, 그 후 정적 파일 생성
export async function getStaticProps(){
  const { data } = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
  return {
    props: {
      lists: data
    }
  }
}
*/
