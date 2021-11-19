import { Button, Icon } from 'semantic-ui-react';
import Link from 'next/link';
export default function error404() {
  return (
    <div style={{textAlign: 'center', fontSize: '30px', padding: '200px 0'}}>
        <p><Icon name='warning sign' />페이지를 찾을 수 없습니다.</p>
        <Button ><Link href='/'><span style={{color: '#555'}}><Icon name='home' />홈으로 이동</span></Link></Button>
    </div>
  )
}
