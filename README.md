
## my Reads App
## create react app 
1 - Draw All of the Views of the App :
====================
|app               |
|  1.header        |
|  2.shelves       |
|    2.current read|
|    2.want to read|
|    2.read        |
|  3.searchbtn     |
|search            |
====================
2 - we need a state in empty array variable i call it 'book' like :
state = {
    books : []
}

3 - Hierarchy of Components like in the draw.
4 - use comopenentDidAmount to fetch data from the database and update state using setState()
5 - pass data throw components
6 - add functionality to components (fetch all data, update data)
7 - add navigation by install react-router-dom
8 - install prop types
9 - create a search page and navigate between the main page and search page.

## Modifications
use search method in BooksAPI 
in search page we can search if there is not thumbnail without any errors
## to use the result please clone the project and write in your terminal "npm install" then "npm start"
