import { FC, useContext } from "react";
import { tpBlogInfo } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";


const BlogInfo: FC<tpBlogInfo> = ({

  image: thumbnail,
  title,
  abstract,
  day,
  month,
  year,
}) => {
  const { setLayoutID } = useContext(GlobalContext);
  const gotoPost = () => {
    setLayoutID(7);
  };

  const monthStr: string[] = [
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

  return (
    <div className="BlogInfo">
      {day !== undefined && month !== undefined && year !== undefined && (
        <div className="date">
          <div className="year">{year}</div>
          <div className="month">{monthStr[month]}</div>
          <div className="day">{day}</div>
        </div>
      )}

      <img src={thumbnail} alt={title} />
      <h1 onClick={gotoPost}>{title}</h1>
      <p>{abstract}</p>
    </div>
  );
};

export default BlogInfo;

