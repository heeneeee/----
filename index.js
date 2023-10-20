const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '07edc9baf57aeb66e3b016062d57688'
    }
  };
  const url = 'https://api.themoviedb.org/3/movie/top_rated'


  

  
  fetch(url, options)
  .then(response => response.json()) 
 .then(data => {
    let rows = data['result'];
    const cardList = document.querySelector('.cardlist');
    cardList.innerHTML = '' ;

    rows.forEach((a) => {
        let _title = a['title'];
        let _overview = a['overview'];
        let _poster_path = a['poster_path'];
        let _vote_average = a['vote_average'];
        let _id = a['id'];
        
        let temp_html = `
        <div class="movie-card" data-id="${_id}">
        <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
        <h3>${_title}</h3>
        <p>${_overview}</p>
        <p>Rating: ${_vote_average}</p>
    </div>
`;
cardList.insertAdjacentHTML('beforeend', temp_html);
    });
 })
