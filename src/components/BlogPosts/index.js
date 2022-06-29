import BlogCard from "../BlogCard";

import styles from "./styles.module.css";

const slideshow1 = window.location.origin + "/assets/images/tofu.png";
const slideshow2 = window.location.origin + "/assets/images/chickpeas.jpg";

const BlogPosts = () => {
  const blogList = [
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow1,
      title: "quinoa dinner",
      category: "main course",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow1,
      title: "food dinner",
      category: "dessert",
    },
    {
      img: slideshow2,
      title: "food dinner",
      category: "dessert",
    },
  ];

  return (
    <div className={styles.blog_container}>
      {blogList.map((blogListItem) => {
        return (
          <BlogCard
            title={blogListItem.title}
            image={blogListItem.img}
            category={blogListItem.category}
          />
        );
      })}
    </div>
  );
};

export default BlogPosts;
