import React from 'react';

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" width="15px" src="../assets/on.png"></img>
    }
    else {
        return <img alt="undone" width="15px" src="../assets/verifica.png"></img>
    }
}

function List(props) {
    return (
        <ul>
            {
                props.items.map(item=>
                <li className={item.done?"done":""} key={item.id}>
                    {item.text}
                    <button onClick={()=>{props.onDone(item)}}>
                        <DoneImg done={item.done}></DoneImg>
                    </button>
                    <button onClick={()=>{props.onItemDeleted(item)}}>
                        <img width="15px" src="../assets/trashCan.png"></img>
                    </button>
                </li>)
            }
        </ul>
    )
}

export default List;