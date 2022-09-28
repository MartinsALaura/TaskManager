import style from './task.module.scss';
export default  function Task({task, selectTask}) {
    return (
        <li 
            key={task.id} 
            className={`${style.task} ${task.selected?style.selectedTask : ''} ${task.completed ? style.completedTask : ''}`}
            onClick={ () => !task.completed && selectTask(task)}
        >
            <h3>{task.desc}</h3>
            <span>{task.time}</span>
            {task.completed && <span className={style.conclude} aria-label='Task completed'></span>}
        </li>
    )
}