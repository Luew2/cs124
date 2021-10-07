import './main.css'
function MainPage(props){
return(
        // <html lang="en">
        // <head>
        //     <link rel="preconnect" href="https://fonts.googleapis.com">
        //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        //     <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        // <meta charset="UTF-8">
        // <title>My Lists</title>
        // <link rel="stylesheet" href="main.css">
        // </head>
    <div>
        <h1 id="MyLists">My Lists</h1>
        <div>
            <div className="list-box" id="list-box-1">
                <p id="list-1">
                    <img src="listIcon.png"/>
                        <span>To-Do</span>
                </p>
            </div>
            <hr/>
            <div className="list-box" id="list-box-2">
                <p id="list-2">
                    <img src="listIcon.png"/>
                        <span>Tasks</span>
                </p>
            </div>
            <hr/>
        </div>

        <div id="button1">
            <button onclick="" id="addTask">
                <img src="plus_best.png"/>
                    <span>Add List</span>
            </button>
        </div>
    </div>
)}
export default MainPage;