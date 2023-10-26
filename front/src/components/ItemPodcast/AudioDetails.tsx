import './ItemPodcast.css'
type Props = {
  title?: string;
  author?: string;
  thumbnail?: string;
  reseña?: string
};
export const AudioDetails = ({ title, author, thumbnail, reseña }: Props) => {
  return (
    <div className="custom-container">


      <div className="ctImageAuthor">
        <img
          src={thumbnail}
          alt=""
          width="150"
          height="150"
          className="custom-image "
        />
        <p className="ctAutor">
          {author}
        </p>


      </div>
      <div className="ctDescripcion">
        <h2 className="ctTitulo">
          {title}
        </h2>
        <p className='ctReseña'>{reseña}</p>

      </div>
    </div>
  );

};
