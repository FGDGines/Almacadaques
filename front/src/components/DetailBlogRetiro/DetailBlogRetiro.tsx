import './DetailBlogRetiro.css';
interface Retiro {
    index: number;
    day: number;
    month: number;
    year: number;
    image: string;
    title: string;
    author: string;
    description?: string;
  }
interface DetailBlogRetiroProps {
  retiro: Retiro | null;
  onClose: () => void;
}
const monthNames = [
    "NULL",
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  function DetailBlogRetiro({ retiro, onClose }: DetailBlogRetiroProps) {
    if (!retiro) {
      return null; // O maneja el caso cuando retiro es nulo.
    }

    return (
        <div className="previRetiro">
            <div className="ctPreviRetiro">
                <div className="closePreviRetiro" onClick={onClose}>
                    <img src="../../../src/assets/images/cerrar.png" alt="Cerrar" />
                </div>
                <div className="imgPreviRetiro">
                    <img src={retiro.image} alt="Imagen retiro" />
                </div>
                <div className="titlePreviRetiro">
                    <h4>{retiro.title}</h4>
                </div>
                <div className="dataPreviRetiro">
                    <h4>{`Dato: ${monthNames[retiro.month]} ${retiro.day}, ${retiro.year}`}</h4>
                    <h4 className='firma' >{retiro.author}</h4>
                </div>
                <div className="descripPreviRetiro">
                    <p>{retiro.description}</p>
                </div>
            </div>
        </div>
    );
}

export { DetailBlogRetiro };
