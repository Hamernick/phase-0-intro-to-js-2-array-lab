const cats = [
    "Milo", 
    "Otis", 
    "Garfield"];
cats;

function destructivelyAppendCat(name) {
cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    const allCats = [...cats, "Broom"];
    return allCats;
}

function prependCat(name){
    const allCatsPrepend = ["Arnold", ...cats]
    return allCatsPrepend
}

function removeLastCat(name){
    cats.slice(0 ,-1);
    return cats.slice(0, -1);
}

function removeFirstCat(name){
    cats.slice(1);
    return cats.slice(1);
}