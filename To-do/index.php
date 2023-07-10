<!DOCTYPE html>
<html>
    <head>
        <title>To-do App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="main.css">
        <link rel="stylesheet" type="text/css" href="fontawesome-all.min.css">
        <script src="main.js" defer></script> 
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

    </head>
    <body>
        <div class="container">
        <header>
       
            <div class="todo" style="display: flex;">
                <div>
                TODO
                </div>        
            <div style="padding-left: 80%;">
            <svg id="icon" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#fff" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
            <br></div>  <br>  
            </div><br>

        </header>
        <main>
        <form action="" onsubmit="add()">
                <input type="text" name="todo" id="input-box" placeholder=" Create a new todo...">
        </form>
                 <br>
            <!-- <button type="button" onclick="add()">Add</button> -->
            <div class="box">
            <ul id="list-container">
              
            </ul>
            </div><br><br><br>
        </main>
        <footer>
            
            <p>Drag and drop to reorder list.</p>
            <div class="">
            </div>
        </footer>
    </div>
    </body>
</html>