import { BrowserRouter as Router, Link } from 'react-router-dom';
import './layout.css';
import { MainWrapper } from './MainWrapper';
import { HeaderWrapper } from './HeaderWrapper';

function LnbWrapper() {
  return <aside className="page_lnb-wrapper">
    <header>
      <h2>목록</h2>
    </header>
    <nav>
      <ul>
        <li>
          <Link to="/ingredient">원료관리</Link>
        </li>
        <li>
          <Link to="/recipe">레시피</Link>
        </li>
        <li>
          <Link to="/usage">사용기록</Link>
        </li>
        <li>
          <Link to="/diary">다이어리</Link>
        </li>
        <li>
          <Link to="/dashboard">대시보드</Link>
        </li>
        <li>
          <Link to="/devnote">개발자 노트</Link>
        </li>
      </ul>
    </nav>
  </aside>;
}

function SideWrapper() {
  return <aside className="page_side-wrapper">
    <header>
      <h2>잘 된 사진 갤러리</h2>
    </header>
    
  </aside>
}

function PageWrapper() {
  const userAgnet = navigator.userAgent;
  const isMobile = userAgnet.includes("Mobi");
  console.log(userAgnet)
  return isMobile? <PageWrapperMobile /> : <PageWrapperDesktop />
}

function PageWrapperDesktop() {
  return <div className="page-wrapper">
    <Router>
      <HeaderWrapper />
      <LnbWrapper />
      <MainWrapper />
    </Router>
    <SideWrapper />  
  </div>
}


function PageWrapperMobile() {
  return <div className="page-wrapper--mobile">
    <Router>
      <HeaderWrapper />
      <LnbWrapper />
      <MainWrapper />
    </Router>
  </div>
}

export { PageWrapper }