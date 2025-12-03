type Props = {
  title: string;
  user_id: string;
}

const PostPreviewItem = ({ title, user_id }: Props) => {
  return (
    <div className="w-full py-2 px-6 flex items-center justify-between bg-white rounded-xl">
      <span>{title}</span>
      <span className="truncate w-20">{user_id}</span>
    </div>
  )
}

export default PostPreviewItem;