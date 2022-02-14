import { 
    db, 
    collection, 
    addDoc 
} from "./connect.js";

const addNewTodo = async (title, day) => {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            title: title,
            day: day
        });
        alert("New todo added")
    } catch (e) {
        alert("Error adding document");
    }
}

const deleteTodo = async () => {
    
}

export {
    addNewTodo
}