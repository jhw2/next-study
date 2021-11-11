
import Gnb from './Gnb';

export default function Top() {
    return (
        <header>
            <div className='group'>
                <a href='/'><img src='/images/next.js.png' alt='nextjs 로고' /><span>STUDY</span></a>
                <Gnb />
            </div>
        </header>
    )
  }