
import './App.css';
import React, {useState} from "react";

function App() {
  const [boards, setBoards] = useState([
    {id:1, title:'Сделать', items:[ {id:1, title:'Пойти в магазин',},{id:2, title:'Купить вино',},{id:1, title:'Выкинуть мусор',},]},
    {id:2, title:'Проверить', items:[ {id:4, title:'Пойти в кино',},{id:5, title:'выгулять собаку',},{id:6, title:'почистить картошку',},]},
    {id:3, title:'Сделано', items:[ {id:7, title:'выучить реакт',},{id:8, title:'собрать миллион',},{id:9, title:'посмотреть телевизор',},]},
  ])
  return (
    <div className="app">
      {boards.map(board=>
      <div className={'board'}>
        <div className={'board__title'}>{board.title}</div>
        {board.items.map(item=>
        <div className={'item'}>{item.title}</div>
        )}
      </div>
      )}

    </div>
  );
}

export default App;
