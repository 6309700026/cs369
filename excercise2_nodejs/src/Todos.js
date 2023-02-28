const Todos = (props) => {

    const { tasks,filter,onToggleDone } = props;

    let taskList = tasks.filter((e) => {
        if (filter === "all") return true;
        //or return true;
        if (filter === "done") return e.done;
        if (filter === "active") return !e.done;
    })

    .map(e => {
        return (
            <li className="list-group-item" key={e.id}>
            <div className="list-item">
                <input id={e.id} type="checkbox" defaultChecked={e.done} 
                    onClick={() => onToggleDone(e.id)}/>
                <label htmlFor={e.id}>{e.content}</label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn__danger">
                Delete
                </button>
            </div>
            </li>
        )     
    })

    const numTasks = taskList.length

    return (
        <>
            <h2 id="list-heading">{numTasks} {numTasks>1?"Tasks":"Task"} remaining</h2>
            <ul className="list-group">   
                {taskList}        
            </ul>
        </>
    )
}
export default Todos;