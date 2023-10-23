const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDdlZGM5YmFmNTdhZWI2NmUzYjAxNjA2MmQ1NzY4OCIsInN1YiI6IjY1MmY3ODMwYTgwMjM2MDExYWM3ZmJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BzKQnq-sGM9wsD00EU-pfpoqsIH7GXPTJF8nY9w0Gcs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options) //fetch는 전역스코프
    .then(response => response.json())
    .then(data => {
      const results = data.results
      console.log(results)
      const cardlist = document.querySelector('.cardlist');

    results.forEach(item => {
      const title = item['title'];   // 대괄호 없이 앞에 . 가능
      const overview = item['overview']; 
      const poster_path = item['poster_path'];
      const vote_average = item['vote_average'];
      const id = item['id'];
      console.log(title, overview, poster_path, vote_average, id)

      const card = document.createElement('div')
      card.classList.add("cardbox")


      card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${poster_path}">
      <h3>${title}</h3>
      <p>${overview}</p>
      <p>Rating: ${vote_average}</p>
      `

      cardlist.appendChild(card)  // 위에 const cardlist를 가리키는 거임
    });
    })
    



    const form = document.getElementById("form")
    const input = document.getElementById("searchBox") 
    form.addEventListener("submit", searchMovie)
    


  
    

    function searchMovie(searchBox) {
        const a = item.title.filter(item => {
        return item.title.toLowerCase().includes(searchBox.toLowerCase())
    
      });
    
      

    }
