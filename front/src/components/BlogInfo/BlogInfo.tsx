import { FC } from "react";
import { tpBlogInfo } from "../../types/typesComponents";

const BlogInfo: FC<tpBlogInfo> = ({
  index,
  day,
  month,
  year,
  thumbnail,
  title,
  abstract,
}) => {
  const gotoPost = () => {
    alert(`Going to post of index: ${index}`);
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
      <div className="date">
        <div className="year">{year}</div>
        <div className="month">{monthStr[month]}</div>
        <div className="day">{day}</div>
      </div>

      <img src={thumbnail} alt={title} />
      <h1 onClick={gotoPost}>{title}</h1>
      <p>{abstract}</p>
    </div>
  );
};

export default BlogInfo;
