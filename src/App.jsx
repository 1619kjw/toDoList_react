/* react-폰트어썸연결(react에서 폰트어썸사용하겠다) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* 개별 fontawesome 불러오기 *//* (어떤 아이콘 가져올건지 세팅) */
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
//import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as solid from '@fortawesome/free-solid-svg-icons'
/* 컴포넌트 호출 */
import Header from './Header';
import Todo from './Todo';
import List from './List';

function App(){
  return (
    <div id="wrap" style={{
        backgroundColor:'#eee',
        width:'420px',
        height:'80vh',
        margin:'0 auto',
        padding:'30px 15px',
        textAlign:'center',
      }}>
      <Header />{/* 태그가 아닌 컴포넌트 호출 */}
      <Todo />
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default App