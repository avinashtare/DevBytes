export type Blog = {
  postDate: string;
  username: string;
  userProfileLink: string;
  title: string;
  description: string;
  tags: string[];
  blogLink: string;
  commentsCount: number;
  likesCount: number;
};

export interface BlogCardProps extends Blog {}
