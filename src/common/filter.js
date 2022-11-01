export function filter(items,genre){
    if(genre==='All Genre'){
        return items;
    }
    
    const movies = items.filter(g=>
        g.genre.name===genre
    );
    return movies;
}