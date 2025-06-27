import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';/* 폰트어썸연결 */
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';/* 개별폰트어썸아이콘연결 */
import './assets/styles/reset.css';
import './assets/styles/Todo.css';

function Todo (){
    return (
        <main>
            <input type="text" placeholder="오늘의 할 일을 적어주세요" />
            <button type="button">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
        </main>
    )
}
export default Todo;