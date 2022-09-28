import style from './watch.module.scss';

interface Props {
    time: number | undefined
}

export function Watch({ time = 0 }: Props) {
    const min =  Math.floor(time / 60)
    const sec = time % 60
    const [minDez, minUn] = String(min).padStart(2, '0')
    const [secDez, secUn] = String(sec).padStart(2, '0')

    return (
        <>
            <span className={style.watchNumber}>{minDez}</span>
            <span className={style.watchNumber}>{minUn}</span>
            <span>:</span>
            <span className={style.watchNumber}>{secDez}</span>
            <span className={style.watchNumber}>{secUn}</span>
        </>
    )
}