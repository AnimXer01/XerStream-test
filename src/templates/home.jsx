import React from 'react';
import '../css/home.css';
function Home() {
	return (
	<div className="main">
		<div className='HeadContainer'>
		  	<header className='AppHeader'>
				XERSTREAM 
		  	</header>
		  	<p className='AppSubHead'>
				Your gateway to kdrama, anime, manga and news.
		  	</p>
		</div>

		<div className='redirectContainer'>
        	<a href="https://xerstream-six.vercel.app">Kdrama</a>
        	<a href="/anime">Anime</a>
        	<a href="/news">News</a>
        	<a href="/movies">Movies</a>
        	<a href="/mangas" >Mangas</a>
		</div>

	</div>
			
  );
}

export default Home
