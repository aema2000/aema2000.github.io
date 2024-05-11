const totalmonster = 45

const monster = [];
for (let index = 1; index <= totalmonster; index++){
    monster.push(`<li>monster ${index}</li>`)
}

const monsterPerPage = 15

let currentPage = 1

const Permonster = [];
for (let index = 0; index < monster.length; index += monsterPerPage){
    Permonster.push(monster.slice(index, index + monsterPerPage))
}