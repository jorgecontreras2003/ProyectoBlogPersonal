import { useState } from 'react';
import Quill from 'quill';
import './CreatePost.scss';
import './quill.custom.scss'




const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o a una base de datos
    console.log({ title, category, content });
  };

  return (
    <div className='create-post'>
        <div className='portada-post'> 
            <h2>Crear Nueva Publicación</h2>
        </div>
        <div className='form-post'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label htmlFor='title'>Título</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                </div>
                <div className='form-group'>
                <label htmlFor='category'>Categoría</label>
                <select
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value=''>Seleccionar Categoría</option>
                    <option value='Programación'>Programación</option>
                    <option value='Viajes'>Viajes</option>
                    <option value='Vida'>Vida</option>
                    <option value='Juegos'>Juegos</option>
                </select>
                </div>
                <div className='form-group'>
                <label htmlFor='content'>Contenido</label>
                <Quill
                    value={content}
                    onChange={setContent}
                    modules={{
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                    }}
                    formats={[
                    'header', 'font', 'size',
                    'bold', 'italic', 'underline', 'strike', 'blockquote',
                    'list', 'bullet',
                    'link', 'image', 'video'
                    ]}
                />
                </div>
                <button className='button-create' type='submit'>Crear Publicación</button>
            </form>
        </div>
    </div>
  );
};

export default CreatePost;
