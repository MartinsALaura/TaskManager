import style from './stopwatch.module.scss';
import Button from '../Button';
import { Watch } from './Watch';
import { timeInSeconds } from '../../common/utils/time';
import {ITarefa} from '../../types/task'
import {useEffect, useState} from 'react'

interface Props {
    selected: ITarefa | undefined,
    finishTask: () => void
}
export function Stopwatch({selected, finishTask}: Props) {
    const [time, setTime] = useState<number>(timeInSeconds(String(selected?.time)))

    useEffect(() => {
        if(selected?.time){
            setTime(timeInSeconds(String(selected.time)))
        }
    }, [selected])

    function regress(i: number = 0) {
        setTimeout(() =>{
            if(i>0) {
                setTime(i - 1)
                return regress(i - 1)
            } finishTask()
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start the stopwatch</p>
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regress(time)}>Start</Button>
        </div>
    )
}