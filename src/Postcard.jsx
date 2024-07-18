import './Postcard.scss';
import { Link } from 'react-router-dom';

function Postcard({title, category, description, date, image}) {
    return (
    <>
    
        <div className='postcard'>
            <div className='postcard-image'>
                <Link to="/blog/publicacion1"><img src={image} alt='foto' /></Link>

            </div>
            <div className='postcard-info'>
                <div className='postcard-category'><strong>{category}</strong></div>
                <Link to="/blog/publicacion1"><h3 className='postcard-title'>{title}</h3></Link>
                <p className='postcard-description'>{description}</p>
                <p className='postcard-date'>{date}</p>
            </div>
        </div>
    </>

    );
}

export default Postcard;