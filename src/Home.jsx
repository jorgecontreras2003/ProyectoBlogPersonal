import { useState } from 'react';
import Postcard from './Postcard'
import Categories from './Categories'
import './Home.scss'

const posts = [
  {id: 1, title: 'Titulo de la publicacion', category: 'Programacion', description: 'lorem ipsum in the fcking street of your mom', date: '01 de Junio, 2024', image : 'https://i.imgur.com/j7sJZ49.jpeg'},
  {id: 2, title: 'Titulo de la publicacion', category: 'Vida', description: 'lorem ipsum in the fcking street of your mom', date: '05 de Junio, 2024', image : 'https://i.imgur.com/XoDOZjg.jpeg'},
  {id: 3, title: 'Post 3', category: 'Juegos', description: 'lorem ipsum in the fcking street of your mom', date: '01 de Agosto, 2024', image : 'https://i.imgur.com/XoDOZjg.jpeg'},
  {id: 4, title: 'Post 4', category: 'Programacion', description: 'Descripcion 4', date: '2021-09-04', image : 'https://i.imgur.com/j7sJZ49.jpeg'},
  {id: 5, title: 'Titulo de la publicacion', category: 'Vida', description: 'lorem ipsum in the fcking street of your mom', date: '05 de Junio, 2024', image : 'https://i.imgur.com/XoDOZjg.jpeg'},
];


function Home() {
  const [currentePage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentePage * postsPerPage; // Index del ultimo post de la pagina actual
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // Index del primer post de la pagina actual
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Posts de la pagina actual

  const totalPages = Math.ceil(posts.length / postsPerPage); //Numero total de pags

  return (
  <>
    <div className='portada'>
      <div className='about'>
        <h2 className='about-title'>Hola, yo soy</h2>
        <h1 className='about-name'>Jorge Contreras</h1>
        <h3 className='about-text'><strong>Estudiante de Ingeniería Informática en la Universidad de Chile.</strong></h3>
      </div>

      <div className='foto'>
        <img src='https://i.imgur.com/ym7Kn1c.jpeg' alt='foto' />
      </div>
    </div>

    <div className='main-blog-section'>
      <div className='blogsec-left'>
        <h2 className='blogsec-title'>Publicaciones recientes</h2>
        {currentPosts.map(post => (
          <Postcard key={post.id} title={post.title} category={post.category} description={post.description} date={post.date} image={post.image} />
        ))}
        <div className='pagination'>
          <button onClick={() => setCurrentPage(currentePage - 1)} disabled={currentePage === 1}>Anterior</button>
          <span>{currentePage} de {totalPages}</span>
          <button onClick={() => setCurrentPage(currentePage + 1)} disabled={currentePage === totalPages}>Siguiente</button>
        </div>
      </div>

      <Categories />
    
    </div>
  </>

  );
}

export default Home;