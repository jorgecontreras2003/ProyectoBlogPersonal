import './Categories.scss';

function Categories() {
    return (
    <>
        <div className='blogsec-right'>
            <h2>Categorias</h2>

            <div className='categoria'>
                <div className='categoria-img'>
                    <img src='https://img.icons8.com/?size=100&id=hfDV-4fdrrRy&format=png&color=000000' alt='foto' />
                </div>
                <div className='categoria-text'>
                    <h3>Programación</h3>
                </div>
            </div>

            <div className='categoria'>
                <div className='categoria-img'>
                    <img src='https://img.icons8.com/?size=100&id=2320&format=png&color=000000' alt='foto' />
                </div>
                <div className='categoria-text'>
                    <h3>Viajes</h3>
                </div>
            </div>

            <div className='categoria'>
                <div className='categoria-img'>
                    <img src='https://img.icons8.com/?size=100&id=35583&format=png&color=000000' alt='foto' />
                </div>
                <div className='categoria-text'>
                    <h3>Vida</h3>
                </div>
            </div>

            <div className='categoria'>
                <div className='categoria-img'>
                    <img src='https://img.icons8.com/?size=100&id=7314&format=png&color=000000' alt='foto' />
                </div>
                <div className='categoria-text'>
                    <h3>Juegos</h3>
                </div>
            </div>
        </div>
    </>
    );
}

export default Categories;