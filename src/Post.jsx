import Categories from './Categories'
import './Post.scss'

function Post() {
  return (
    <>
      <div className='main-post'>
        <div className='post-header'>
              <h1>Titulo de la publicación</h1>
              <div className='h5'>
                <h5>Hecho por <span>Jorge Contreras</span>・ 01/01/2003 </h5>
              </div>
              
        </div>

        <div className='main-page'>
          <div className='post-content'>
            <div className='post-image'>
              <img src='https://i.imgur.com/j7sJZ49.jpeg' alt='Imagen de la publicación' />
            </div>
            <div className='post-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
              </p>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
                Maecenas nec nunc nec neque vehicula pretium.
              </p>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
                Maecenas nec nunc nec neque vehicula pretium.
              </p>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
                Maecenas nec nunc nec neque vehicula pretium.
              </p>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
                Maecenas nec nunc nec neque vehicula pretium.
              </p>
              <br>
              </br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam ac dui nec nunc ultrices ultricies. 
                Integer nec orci nec libero tincidunt lacinia. 
                Nulla facilisi. 
                Maecenas nec nunc nec neque vehicula pretium.
              </p>
            </div>
          </div>

          <Categories />
        </div>

        
        
      </div>
    </>
  )
}

export default Post
