
function DevNotePage() {
  import('./data/sep2021.json').then((data)=> console.log(data));
  return <div className="devnote">
    <header>
      <h2>개발자 노트</h2>
    </header>
    <div>
      개발자 노트 데스크탑 버전입니다.
    </div>
  </div>
}

export { DevNotePage }