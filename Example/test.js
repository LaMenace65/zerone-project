import {useState} from "react";
import Fruit from "../../../Example/components/Fruit";
import FruitFrom from "../../../Example/components/FruitFrom";

function App() {
    // state
    const [fruits, setFruits] = useState([
        {id: 1, name: "Abricots"},
        {id: 2, name: "Banane"},
        {id: 3, name: "Cerise"}
    ]);

    // comportements
    const handleDelete = (id) => {
        // copie du state
        const fruitsCopy = [...fruits];
        // manipuler mon state
        const fruitCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
        // modifie mon state
        setFruits(fruitCopyUpdated);
    }

    const handleAdd = (addFruit) => {
        const fruitsCopy = [...fruits];
        fruitsCopy.push(addFruit);
        setFruits(fruitsCopy);
    }

    const showMyBestFruit = (fruitName) => {
        alert(`This is my best fruit: ${fruitName}`)
    }

    // render
    return (
        <div>
            <h1>Liste de fruits</h1>
            <ul>
                {fruits.map((fruit) =>
                    <Fruit
                        key={fruit.id}
                        fruitInfo={fruit}
                        onClick={() => showMyBestFruit(fruit.name)}
                    />
                )}
            </ul>
            <FruitFrom handleAdd={handleAdd}/>
        </div>
    )
}

export default App;