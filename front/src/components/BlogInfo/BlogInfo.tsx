import { FC, useContext } from "react";
import { tpBlogInfo } from "../../types/typesComponents";
import { GlobalContext } from "../../contexts/GlobalContext";
import './BlogInfo.css'


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

      <div className="ctBlogInf">
        <img src={thumbnail} alt={title} className="imgInfBlog" />
        <div className="dayTitle">
          {day !== undefined && month !== undefined && year !== undefined && (
            <div className="date">
              <div className="month">{monthStr[month]}</div>
              <div className="day">{day}</div>
            </div>
          )}
          <h1 onClick={gotoPost} className="titleInfo">{title}</h1>
        </div>
        <p className="textInfo">{abstract}</p>
        <a href="#" className="btnInfo">READ MORE</a>
      </div>


    </div>
  );
};

export default BlogInfo;

