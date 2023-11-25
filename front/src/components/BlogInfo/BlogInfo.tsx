import { FC, useContext } from "react";
import { tpBlogInfo } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";
import './BlogInfo.css';


const BlogInfo: FC<tpBlogInfo> = ({

  image: thumbnail,
  title,
  abstract,
  day,
  month,
  year,
  author,
  btnInfo,
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

      <div className="ctBlogInf">
        <img src={thumbnail[0]} alt={title} className="imgInfBlog" />
        <div className="dayTitle">
          {year && <div className="year">{year}</div>}
          {month && <div className="month">{monthStr[month]}</div>}
          {day && <div className="day">{day}</div>}
          <p className="authorInfo">{author}</p>
          <h1 onClick={gotoPost} className="titleInfo">{title}</h1>
        </div>

        <p className="textInfo">{abstract}</p>
        <a href="#" className="btnInfo">{btnInfo}</a>
      </div>


    </div>
  );
};

export default BlogInfo;

