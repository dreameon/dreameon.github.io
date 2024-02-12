import React from 'react'
import portrait from './image.png';
import ProjectCard from './ProjectCard';
import Logo from './logo.svg';
import TeaSet from './ccs tea set.svg';
import Genshin from './genshin.png'
import './css/index.css';
import './css/home.css';


function Home() {
  return (
    <div>
      <div className="center-flex intro">
        <img src={portrait} className="portrait" alt='Portrait'/>
        <div className='description'>
          <div className="title">
            evelyn law
          </div>
          <div className="body">
          hey, i’m evelyn, but my friends call me eevee! i own a small business where i sell stuff i design, watch anime and play games in my spare time, and use pastel colours a bit too much.
          </div>
        </div>
      </div>
      <div className='center-flex gallery'> 
        <div className='row'>
          <div className='projects'>
            <ProjectCard project='puripalette' src={Logo} link='puripalette'/>
            <ProjectCard project='clear card tea set' src={TeaSet} link='clear-card-tea-set'/>
            <ProjectCard project='genshin impact loungewear sets' src={Genshin} link='genshin-loungewear'/>
          </div>
          <div className='projects'>
            <ProjectCard project='handmade miniatures' src={Logo} link='handmade-mini'/>
            <ProjectCard project='twitch streaming' src={Logo} link='streaming'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
