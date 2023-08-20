import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
import AddSearchApp from './component/AddSearchApp';
import Search from './component/Search';
import Delete from './component/Delete';

function App() {
  return (
    <div>

      <TodoApp/>
      <AddSearchApp/>
      <Search/>
      <Delete/>
    </div>
  );
}

export default App;
