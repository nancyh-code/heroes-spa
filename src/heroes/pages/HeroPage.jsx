import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //useMemo ayuda a memorizar valores, para que no se ejecute cada vez que se renderiza el componente, sino cuando cambie la dependencia, en este caso el id
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    //Para regresar atras
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to='/marvel' />;
  }
  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group.flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
