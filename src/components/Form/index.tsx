import React from "react";
import Button from "../Button";
import style from './form.module.scss';
import { useState } from "react";
import { ITarefa } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTaskList: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Form = ({ setTaskList}: Props) => {
    const [time, setTime] = useState('00:00:00')
    const [desc, setDesc] = useState('')
    
    function saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTaskList(oldTasks =>
            [
                ...oldTasks,
                {
                    id: uuidv4(),
                    desc,
                    time,
                    selected: false,
                    completed: false
                }
            ]
        )   
        setDesc('')
        setTime('00:00')
    }

    return (
        <form className={style.newTask} onSubmit={saveTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add a new task: </label>
                <input type='text'
                 name="task"
                 id="task" 
                 value={desc} 
                 onChange={(e) => setDesc(e.target.value)}
                 placeholder="What do you want to do?" 
                 required
                />
            </div>
            <div className={style.inputContainer}>
                <label>Time</label>
                <input 
                 type='time' 
                 step='1' 
                 id="time" 
                 min='00:00:00' 
                 value={time}
                 onChange={(e) => setTime(e.target.value)} 
                 max='01:30:00' 
                 required
                />
            </div>
            <Button type='submit'>Add</Button>
        </form>
    )
}
export default Form