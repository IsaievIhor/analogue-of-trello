import './App.css';
import React, {useState} from "react";

function App() {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Сделать',
            items: [{id: 1, title: 'Пойти в магазин',}, {id: 2, title: 'Купить вино',}, {
                id: 1,
                title: 'Выкинуть мусор',
            },]
        },
        {
            id: 2,
            title: 'Проверить',
            items: [{id: 4, title: 'Пойти в кино',}, {id: 5, title: 'выгулять собаку',}, {
                id: 6,
                title: 'почистить картошку',
            },]
        },
        {
            id: 3,
            title: 'Сделано',
            items: [{id: 7, title: 'выучить реакт',}, {id: 8, title: 'собрать миллион',}, {
                id: 9,
                title: 'посмотреть телевизор',
            },]
        },
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);


    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className === 'item') {
            e.target.style.boxShadow = '0 2px 3px gray'
        }

    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }


    function dropCardHandler(e, board) {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)

        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div className="app">
            {boards.map(board =>
                <div
                    className={'board'}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                >
                    <div className={'board__title'}>{board.title}</div>
                    {board.items.map(item =>
                        <div
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragStart={(e) => dragStartHandler(e,board,item)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e,board, item)}
                            draggable={true}
                            className={'item'}
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}

export default App;
