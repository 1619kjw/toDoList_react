import './assets/styles/reset.css';
import './assets/styles/Header.css';

/* 함수형 컴포넌트 생성 */
function Header (){
    return (
        <header>
            <h1>To Do List</h1>
        </header>
    )
}
/* 다른 곳에서 import로 받기위한 내보내기작업 */
export default Header;