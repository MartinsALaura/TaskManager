import style from'./list.module.scss'
import Task from './task'
import {FaTrash} from 'react-icons/fa';

function List ({taskList, setTaskList, selectTask}) {
    return (
        <aside className={style.taskList}>
            <h2>To-do:</h2>
            <ul>
                {taskList?.map((task) => {
                    return (
                        <Task 
                            key={task.id} 
                            task={task}
                            selectTask={selectTask}
                        />
                    )
                })}
            </ul>
            <br></br><FaTrash onClick={() => setTaskList([])}></FaTrash>
        </aside>
    )
}
export default List