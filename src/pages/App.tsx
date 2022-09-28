import React, {useState} from 'react';
import style from './App.module.scss';
import Form from '../components/Form'
import List from '../components/List';
import{ Stopwatch} from '../components/Stopwatch'
import { ITarefa } from '../types/task';
function App() {
  const [taskList, setTaskList] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();
  const selectTask = (selectedTask: ITarefa) => {
    setSelected(selectedTask)
    setTaskList(taskList => {
      return taskList.map(task => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false
      }))
    })
  }
  function finishTask() {
    if(selected) {
      setSelected(undefined)
      setTaskList(taskList => taskList.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task
        }))
    }  
  }

  return (
    <div className={style.AppStyle}>
      <Form setTaskList={setTaskList}/>
      <List taskList= {taskList} setTaskList={setTaskList} selectTask={selectTask}/>
      <Stopwatch selected={selected} finishTask={finishTask}/>
    </div>
  );
}
export default App;
