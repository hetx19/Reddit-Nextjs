import Vote from '../feed/Vote'
import Actions from '../feed/Actions'
import Info from '../feed/Info'
import { useContext } from 'react'
import { RedditContext } from '../../context/RedditContext'
import { useRouter } from 'next/router'

const styles = {
  post: `flex flex-col space-y-1 cursor-pointer`,
  wrapper: `flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]`,
  postTitle: `text-lg font-medium text-[#D7DADC]`,
  postContent: `text-sm font-light text-[#D7DADC]/80`
}

const Post = ({ id, title, author, content, upvotes, downvotes, created_at }) => {

  const router = useRouter();
  const { setSelectedPost } = useContext(RedditContext)

  const navigateToPost = () => {
    setSelectedPost({ id, title, content, author, created_at, upvotes, downvotes });

    router.push(`/post/${id}`)
  }

  return (
    <div className={styles.wrapper}>
      <Vote upvotes={upvotes} downvotes={downvotes} />
      <div className={styles.post} onClick={navigateToPost}>
        <Info author={author} />
        <h1 className={styles.postTitle}>{title}</h1>
        <p className={styles.postContent}>{content}</p>
        <Actions />
      </div>
    </div >
  )
}

export default Post