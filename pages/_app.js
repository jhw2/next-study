import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Head from 'next/Head';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';
/**
 * 페이지 전환 시 레이아웃 유지
 * 페이지 전환 시 상태값 유지
 * componentDidCatch를 통해 커스템 에러 핸들링 가능
 * 추가적인 데이터를 페이지로 주입 가능
 *  글로벌 css 선언하는곳
 */
function MyApp({ Component, pageProps }) {
  return (
    <div id='wrap'>
      <Head>
        <title>next js STUDY</title>
      </Head>
      <Top />
      <div className='cont'>
        <div className='group'>
          <Component {...pageProps} />  
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
