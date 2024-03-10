export default function Fruit({fruitInfo, onClick}){
    //state

    //comprotement
    //render
    return (
        <li>
            {fruitInfo.name}
            <button onClick={onClick}>X</button>
        </li>
    );
}