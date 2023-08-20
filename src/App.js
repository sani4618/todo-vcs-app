import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
import AddSearchApp from './component/AddSearchApp';
import Search from './component/Search';
import Delete from './component/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route path ="/"exact element={<TodoApp/>}/>
  <Route path ="/Add"exact element={<AddSearchApp/>}/>
  <Route path ="/delete"exact element={<Delete/>}/>
  <Route path="/search"exact element={<Search/>}/>
  </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
