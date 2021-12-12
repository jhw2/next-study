import Head from 'next/Head';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { setCookie, getCookie, removeCookie } from "../src/utils/cookies.ts";

export default function About(props) {
  const { query } = useRouter();
  

  useEffect(()=>{
    for(let key in query){
      setCookie(key, query[key], {});
      console.log(getCookie(key));
    }
  },[query])

  return (
    <div>
      <Head>
        <title>next js About</title>
      </Head>
      About
    </div>
  )
}
