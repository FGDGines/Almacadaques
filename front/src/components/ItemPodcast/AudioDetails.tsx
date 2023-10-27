import './ItemPodcast.css'
type Props = {
  title?: string;
  author?: string;
  thumbnail?: string;
  reseña?: string;
  fecha?: string;
};
export const AudioDetails = ({ title, author, thumbnail, reseña, fecha }: Props) => {
  return (
    <div className="custom-container" data-bg-image={thumbnail}>
      <div className="ctOverlay">
        <div className="ctDescripcion">

          <div className="containerInicial">
            <h3 className='ctFecha'>{fecha}</h3>
            <h2 className="ctTitulo">
              {title}
            </h2>
          </div>

          <div className="containerResena">
            <p className='ctReseña'>{reseña}</p>
          </div>

          <div className="infoAdicional">
          <div className='autor'>
                <p><span className='guion'>-</span>{author}</p>
              </div>
            <div className="ctRedes">
              <div className="ctlinks">
                <a className="fa-brands fa-facebook" href=""></a>
                <a className="fa-brands fa-instagram" href=""></a>
                <a className="fa-brands fa-youtube" href=""></a>
              </div>

              
            </div>

          </div>

        </div>

      </div>
      <img
        src={thumbnail}
        alt=""

      />


    </div>
  );

};
