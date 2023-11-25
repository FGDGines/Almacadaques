import { FC } from "react";
import { tpBlogInfo } from "../../types/typesComponents";

const BlogPreview: FC<tpBlogInfo> = ({ day, month, year, image, title }) => {
  return (
    <div className="BlogPreview"  >
      <img src={image[0]} alt="" />
      <h5>{title}</h5>
      <h5>
        {day}/{month}/{year}
      </h5>
    </div>
  );
};

export default BlogPreview;
