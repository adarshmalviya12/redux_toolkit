import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([label, emoji]) => (
      <button
        key={label}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: label }))
        }
      >
        {emoji} {post.reactions[label]}
      </button>
    )
  );
  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
