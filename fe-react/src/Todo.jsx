const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const todoItem = { id: todos.length + 1, text: newTodo };
            setTodos([...todos, todoItem]);
            setNewTodo(''); // Girdi alanını temizle
        }
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Yeni görev ekle"
            />
            <button onClick={addTodo}>Ekle</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;