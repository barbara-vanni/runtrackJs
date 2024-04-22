const solution = [
    {
    id: "a",
    row: 1,
    col: 1,
    ok: 0
    },
    {
    id: "b",
    row: 1,
    col: 2,
    ok: 0
    },
    {
    id: "c",
    row: 1,
    col: 3,
    ok: 0
    },
    {
    id: "d",
    row: 2,
    col: 1,
    ok: 0
    },
    {
    id: "e",
    row: 2,
    col: 2,
    ok: 0
    },
    {
    id: "f",
    row: 2,
    col: 3,
    ok: 0
    },
    {
    id: "g",
    row: 3,
    col: 1,
    ok: 0
    },
    {
    id: "h",
    row: 3,
    col: 2,
    ok: 0
    }
  ],
        cases = document.getElementsByClassName('case'),
        shuffle = document.querySelector('.shuffle-btn'),
        container = document.querySelector('.game-container'),
        message = document.querySelector('.title'),
        place = [     
    ["b", "c", "f", "h", "a", "e", "d", "g"],
    ["e", "h", "b", "d", "a", "c", "g", "f"],
    ["b", "d", "c", "g", "a", "h", "f", "e"],
    ["c", "d", "e", "b", "g", "f", "a", "h"],
    ["e", "h", "b", "d", "a", "c", "g", "f"],
    ["d", "h", "a", "e", "c", "g", "b", "f"]
  ]
  
  let won = false
  
  prepareGame()
  
  shuffle.addEventListener('click', ()=>{prepareGame()})
  
  for (const casee of cases){  
    casee.addEventListener('click', () => {
      const empty = document.querySelector('.case[data-id="empty"]')
      const deltaX = Math.abs(parseInt(casee.dataset.row, 10) - parseInt(empty.dataset.row, 10))
      const deltaY = Math.abs(parseInt(casee.dataset.column, 10) - parseInt(empty.dataset.column, 10))
      if((deltaX === 0 && deltaY === 1) || (deltaX === 1 && deltaY === 0)){
        const firstRow = casee.dataset.row
        const firstColumn = casee.dataset.column
        casee.dataset.row = empty.dataset.row
        casee.dataset.column = empty.dataset.column
        empty.dataset.row = firstRow
        empty.dataset.column = firstColumn
        checkGrid(casee)
      }
    })
  }
  
  function checkGrid(casee){

    let nbCasesOk = 0
    
    for(let i = 0; i < solution.length; i++){    
      
      solution[i].id === casee.dataset.id ? (
        solution[i].row === parseInt(casee.dataset.row, 10) ? (
          solution[i].col === parseInt(casee.dataset.column, 10) ? (
            solution[i].ok = 1) : solution[i].ok = 0 ) : solution[i].ok = 0 ) : null
      
            solution[i].ok === 1 ? nbCasesOk++ : null    
      
          }
     
      console.log(nbCasesOk)
    
    nbCasesOk === solution.length ? gameWon() : null
  }
  
  function prepareGame(){
    
    if(won){
      container.style.backgroundColor = "grey"
      message.textContent = "Le jeu du taquin"
      message.style.color = "black"
      message.style.fontWeight = "normal"
      for (const casee of cases){
      casee.style.opacity = 1
      }
      for (const sol of solution){
      sol.ok = 0
      }
      won = false
    }
    
    const gamePlaces = (Math.floor(Math.random()*place.length))
    
    for(i=0; i<9; i+=3){
      for(j=0; j<3; j++){      
        if(i+j+1 != 9){
          const currentCase = cases[i+j+1]
          console.log(place[gamePlaces][i+j])
          console.log('row = ' + (1 + i/3) + ' et column = ' + (1 + j))
          currentCase.dataset.row = (1 + i/3)
          currentCase.dataset.column = (1 + j)
          currentCase.dataset.id = place[gamePlaces][i+j]
          
          checkGrid(currentCase)
        }
        else{
          cases[0].dataset.id = 'empty'
          cases[0].dataset.row = 3
          cases[0].dataset.column = 3
        }
      }
    }  
  }
  
  function gameWon() {
    console.log('you are a winner')
    container.style.backgroundColor = "white"
    message.textContent = "BRAVO"
    message.style.color = "red"
    message.style.fontWeight = "bolder"
    for (const casee of cases){
      casee.style.opacity = 0
    }
    won = true

    console.log(won)
  }