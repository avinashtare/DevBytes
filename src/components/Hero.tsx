"use client";
import React from "react";
import BlogCard from "./blog/card";
import { Blog } from "@/types/blog.types";
import { Tilt } from "react-tilt";

const Hero = () => {
  const blogs = [
    {
      postDate: "2024-09-15T10:00:00Z",
      username: "Avinash",
      userProfileLink: "https://randomuser.me/api/portraits/men/23.jpg",
      title: "Understanding JavaScript Closures",
      description:
        "An in-depth guide to understanding closures in JavaScript, including practical examples and use cases.",
      tags: ["JavaScript", "Programming", "Web Development"],
      blogLink: "/understanding-js-closures",
      commentsCount: 3,
      likesCount: 15,
    },
    {
      postDate: "2024-09-14T09:00:00Z",
      username: "JaneDoe",
      userProfileLink: "https://randomuser.me/api/portraits/women/22.jpg",
      title: "Mastering CSS Grid",
      description:
        "A comprehensive guide to CSS Grid, covering layout techniques and best practices.",
      tags: ["CSS", "Web Design", "Frontend"],
      blogLink: "/mastering-css-grid",
      commentsCount: 5,
      likesCount: 20,
    },
    {
      postDate: "2024-09-13T08:30:00Z",
      username: "JohnSmith",
      userProfileLink: "https://randomuser.me/api/portraits/men/21.jpg",
      title: "Introduction to React Hooks",
      description:
        "Learn about React Hooks, including useState and useEffect, and how they simplify state management.",
      tags: ["React", "JavaScript", "Frontend"],
      blogLink: "/introduction-to-react-hooks",
      commentsCount: 8,
      likesCount: 25,
    },
    {
      postDate: "2024-09-12T07:45:00Z",
      username: "EmilyJones",
      userProfileLink: "https://randomuser.me/api/portraits/women/24.jpg",
      title: "Understanding TypeScript",
      description:
        "An introduction to TypeScript, its key features, and how it improves JavaScript development.",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      blogLink: "/understanding-typescript",
      commentsCount: 2,
      likesCount: 10,
    },
    {
      postDate: "2024-09-11T06:15:00Z",
      username: "ChrisJohnson",
      userProfileLink: "https://randomuser.me/api/portraits/men/20.jpg",
      title: "Building RESTful APIs with Node.js",
      description:
        "Learn how to build scalable and maintainable RESTful APIs using Node.js and Express.js.",
      tags: ["Node.js", "API", "Backend"],
      blogLink: "/building-restful-apis",
      commentsCount: 7,
      likesCount: 30,
    },
    {
      postDate: "2024-09-10T05:00:00Z",
      username: "SophiaWilliams",
      userProfileLink: "https://randomuser.me/api/portraits/women/25.jpg",
      title: "CSS Flexbox Layout Techniques",
      description:
        "A deep dive into CSS Flexbox and how to use it to create flexible, responsive layouts.",
      tags: ["CSS", "Web Design", "Frontend"],
      blogLink: "/css-flexbox-layout-techniques",
      commentsCount: 4,
      likesCount: 18,
    },
    {
      postDate: "2024-09-09T03:30:00Z",
      username: "MichaelBrown",
      userProfileLink: "https://randomuser.me/api/portraits/men/19.jpg",
      title: "Async/Await in JavaScript",
      description:
        "An explanation of JavaScript's async/await syntax and how it simplifies working with asynchronous code.",
      tags: ["JavaScript", "Async", "Programming"],
      blogLink: "/async-await-javascript",
      commentsCount: 6,
      likesCount: 22,
    },
    {
      postDate: "2024-09-08T02:15:00Z",
      username: "OliviaDavis",
      userProfileLink: "https://randomuser.me/api/portraits/women/26.jpg",
      title: "Introduction to GraphQL",
      description:
        "Get started with GraphQL, a query language for your API, and learn how it differs from REST.",
      tags: ["GraphQL", "API", "Backend"],
      blogLink: "/introduction-to-graphql",
      commentsCount: 9,
      likesCount: 35,
    },
    {
      postDate: "2024-09-07T01:00:00Z",
      username: "DavidMartinez",
      userProfileLink: "https://randomuser.me/api/portraits/men/18.jpg",
      title: "Building Single Page Applications with React",
      description:
        "Learn how to build fast and responsive single-page applications (SPAs) using React.",
      tags: ["React", "JavaScript", "Frontend"],
      blogLink: "/building-spa-with-react",
      commentsCount: 3,
      likesCount: 17,
    },
    {
      postDate: "2024-09-06T12:30:00Z",
      username: "SophiaClark",
      userProfileLink: "https://randomuser.me/api/portraits/women/27.jpg",
      title: "Understanding Git and GitHub",
      description:
        "A beginner-friendly guide to understanding Git and GitHub, and how to use them for version control.",
      tags: ["Git", "GitHub", "Version Control"],
      blogLink: "/understanding-git-github",
      commentsCount: 10,
      likesCount: 40,
    },
  ];

  return (
    <div className="flex-1 ml-[20%]">
      <div className="blogs">
        {blogs.map((blog: Blog, index) => (
          <BlogCard
            key={index}
            postDate={blog.postDate}
            username={blog.username}
            userProfileLink={blog.userProfileLink}
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            blogLink={blog.blogLink}
            commentsCount={blog.commentsCount}
            likesCount={blog.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
