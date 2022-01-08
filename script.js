async function searchdish(url){
    let res = await fetch(url)
    let data = await res.json()
    return data.meals;
}



export default searchdish