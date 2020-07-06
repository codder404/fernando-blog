import React from "react";
import { Link } from "gatsby";

import Title from "./Title";
import Blog from "./Blog";

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          todos os posts
        </Link>
      )}
    </section>
  )
}

export default Blogs;
