import { Comment } from '../types/comment';
import { User } from '../types/user';
import { BlogPost } from '../types/blogPost';

interface CommentListProps {
  comments: Comment[];
  users: User[];
  posts: BlogPost[];
}

export default function CommentList({ comments, users, posts }: CommentListProps) {
  const getUserName = (userId: string) =>
    users.find((u) => u.id.toString() === userId)?.name || 'Unknown User';

  const getPostTitle = (postId: string) =>
    posts.find((p) => p.id.toString() === postId)?.title || 'Unknown Post';

  return (
    <div className="mt-6 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 border rounded shadow-sm">
          <div className="text-sm text-gray-500">
            {getUserName(comment.userId)} on <strong>{getPostTitle(comment.postId)}</strong>
          </div>
          <p className="mt-2">{comment.body}</p>
          <div className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}
