import './Postcard.scss';

function Postcard({title, category, description, date, image}) {
    return (
    <>
    
        <div className='postcard'>
            <div className='postcard-image'>
                <img src={image} alt='foto' />
            </div>
            <div className='postcard-info'>
                <div className='postcard-category'><strong>{category}</strong></div>
                <h3 className='postcard-title'>{title}</h3>
                <p className='postcard-description'>{description}</p>
                <p className='postcard-date'>{date}</p>
            </div>
        </div>
    </>

    );
}

export default Postcard;