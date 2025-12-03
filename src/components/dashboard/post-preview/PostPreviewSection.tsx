import HeaderActionBar from "../HeaderActionBar";
import PostPreviewItem from "./PostPreviewItem";

export type Post = {
  id: number;
  user_id: string;
  title: string;
};

type Props = {
  posts: Post[];
};

const PostPreviewSection = ({ posts }: Props) => {
  return (
    <div className="w-full flex flex-col rounded-2xl">
      <HeaderActionBar />
      <div className="flex flex-col gap-[0.125rem]">
        {posts.map((post) => (
          <PostPreviewItem
            key={post.id}
            title={post.title}
            user_id={post.user_id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostPreviewSection;

/*
  # PostPreviewList 필요
  # Header Action Bar 필요
*/
