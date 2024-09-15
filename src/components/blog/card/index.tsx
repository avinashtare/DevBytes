import React from "react";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";
import { CiFileOn } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BlogCardProps } from "@/types/blog.types";

const BlogCard = (props: BlogCardProps) => {
  const {
    postDate,
    username,
    userProfileLink,
    title,
    description,
    tags,
    blogLink,
    commentsCount,
    likesCount,
  } = props;
  const { push } = useRouter();

  return (
    <div
      className="blog bg-secondary w-full flex p-3 rounded-xl cursor-pointer hover:bg-somth_gray transition my-2"
      onClick={() => {
        push(blogLink);
      }}
    >
      {/* profile  */}
      <div className="profile w-10 h-10 rounded-full overflow-hidden border border-input flex cursor-pointer">
        <img
          className="h-full w-full hover:scale-125 transition"
          src={userProfileLink}
          alt={`profile ${username}`}
        />
      </div>
      {/* content */}
      <div className="content px-2 w-full">
        <div className="flex flex-col">
          <Link href="/" className="font-bold text-nav_links cursor-pointer">
            {username}
          </Link>
          <span className="text-xs text-nav_links">Sep 14 (13 hours ago)</span>
        </div>
        {/* data */}
        <div className="data my-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="text-sm">{description}</span>
          <div className="tags flex mt-2 gap-3">
            {tags.map((tag) => (
              <Link
                key={tag + Math.random()}
                href="/"
                className="hover:bg-popover p-1 px-3 rounded-lg transition duration-600 border hover:border-input"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        {/* links commnets save btn  */}
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="like flex items-center gap-2 cursor-pointer hover:bg-popover px-3 py-1 rounded-sm border border-input">
              <BiSolidLike />
              <span>{likesCount} Links</span>
            </div>
            <div className="comment flex items-center gap-2 cursor-pointer hover:bg-popover px-3 py-1 rounded-sm border border-input">
              <FaComment />
              <span>{commentsCount} Comment</span>
            </div>
          </div>
          <div>
            <div className="save">
              <CiFileOn className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
