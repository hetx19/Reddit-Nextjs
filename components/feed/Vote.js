import { UpvoteIcon } from "../common/UpvoteIcon"
import { DownvoteIcon } from "../common/DownvoteIcon"

const style = {
  wrapper: `flex flex-col items-center`,
  votes: `py-1 text-xs font-bold text-white`
}

const Vote = ({ upvotes, downvotes }) => {
  return (
    <div className={style.wrapper}>
      <button>
        <UpvoteIcon />
      </button>

      <p className={style.votes}>{upvotes - downvotes}</p>

      <button>
        <DownvoteIcon />
      </button>
    </div>
  )
}

export default Vote