import {useState} from "react";

export default function FruitFrom({handleAdd}){
    // State
    const [nouveauFruit, setNouveauFruit] = useState("")

    // Comportements
    const handleSubmit = (event) => {
        event.preventDefault(); // Block evenement pendant l'execution de la fonction
        const id = new Date().getTime();
        const name = nouveauFruit;
        const addFruit = {id, name};
        handleAdd(addFruit);
        setNouveauFruit("");
    }

    const handleChange = (event) => {
        setNouveauFruit(event.target.value)
    }

    // Render
    return (<form onSubmit={handleSubmit}>
            <input
                value={nouveauFruit}
                type="text"
                placeholder="Nom du fruit"
                onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}