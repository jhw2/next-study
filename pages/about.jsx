import Head from 'next/Head';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { setCookie, getCookie, removeCookie } from "../src/utils/cookies.ts";
import Editor from '../src/component/faq/Editor';

export default function About(props) {
  const { query } = useRouter();
  

  useEffect(()=>{
    for(let key in query){
      setCookie(key, query[key], {});
      console.log(getCookie(key));
    }
  },[query]);

  const onChangeEditor = (tag)=>{

  }

  return (
    <div>
      <Head>
        <title>email</title>
      </Head>
      <h2>문의하기</h2>
      <Editor onChangeEditor={onChangeEditor} defaultValue="" />
    </div>
  )
}
