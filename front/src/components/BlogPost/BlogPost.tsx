import BlogInfo from "../BlogInfo/BlogInfo";
import Footer from "../Footer/Footer";
import Franja from "../Franja/Franja";
import Navbar from "../Navbar/Navbar";
import "./BlogPost.css";
import TestimonyBar from "../TestimonyBar/TestimonyBar";
import { testimonies } from "../../data/testimonies";

const BlogPost = () => {
  return (
    <div className="BlogPost">
      <Navbar />
      <Franja text="Blog" />
      <BlogInfo
        index={0}
        day={17}
        month={5}
        year={2023}
        tags={["Salud", "Fitness", "Nutrición", "Mente"]}
        image="./src/assets/images/blog-line-1-620x464.jpg"
        title="The ultimate guide to time management"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec venenatis elit, sed vehicula sapien. Praesent facilisis varius imperdiet. Ut et ligula quis mi viverra sodales. Vivamus lectus magna, faucibus vel ipsum. Proin iaculis, diam et placerat lacinia, odio nisl congue tellus, sed placerat nunc neque id urna. Phasellus nec massa purus."
      />
      <BlogInfo
        index={0}
        day={17}
        month={5}
        year={2023}
        tags={["Salud", "Fitness", "Nutrición", "Mente"]}
        image="./src/assets/images/blog-line-1-771x515.jpg"
        title="The ultimate guide to time management"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec venenatis elit, sed vehicula sapien. Praesent facilisis varius imperdiet. Ut et ligula quis mi viverra sodales. Vivamus lectus magna, faucibus vel ipsum. Proin iaculis, diam et placerat lacinia, odio nisl congue tellus, sed placerat nunc neque id urna. Phasellus nec massa purus."
      />
      <BlogInfo
        index={0}
        day={17}
        month={5}
        year={2023}
        tags={["Salud", "Fitness", "Nutrición", "Mente"]}
        image="./src/assets/images/blog-line-2-770x433.jpg"
        title="The ultimate guide to time management"
        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec venenatis elit, sed vehicula sapien. Praesent facilisis varius imperdiet. Ut et ligula quis mi viverra sodales. Vivamus lectus magna, faucibus vel ipsum. Proin iaculis, diam et placerat lacinia, odio nisl congue tellus, sed placerat nunc neque id urna. Phasellus nec massa purus."
      />
      <TestimonyBar testimonies={testimonies} quantityPerLayout={3} />
      <Footer />
    </div>
  );
};

export default BlogPost;
