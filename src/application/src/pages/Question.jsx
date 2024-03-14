import {useState} from "react";

export default function Question(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {title, content, images, categories};
        console.log(formData);

        // Reinitialize the form
        setTitle("");
        setContent("");
        setImages([]);
        setCategories([]);
    }

    return <>
        <div className="form-container">
            <div className="form-header">
                <h1>Question</h1>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="inputs-question">
                        <div className="input-question">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                placeholder="Title of the question..."
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-question">
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                value={content}
                                placeholder="Content of the question..."
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-question">
                            <label htmlFor="images">Images:</label>
                            <input
                                type="file"
                                id="images"
                                onChange={(e) => setImages([...images, ...e.target.files])}
                                multiple
                            />
                        </div>
                        <div className="input-question">
                            <label htmlFor="categories">Categories:</label>
                            <input
                                type="text"
                                id="categories"
                                value={categories}
                                onChange={(e) => setCategories(e.target.value.split(','))}
                                placeholder="Categories of the question..."
                            />
                            <div className="categoriInfo">*Separate categories with commas</div>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
}