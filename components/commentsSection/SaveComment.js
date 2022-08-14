import { useState, useContext } from "react"
import { RedditContext } from "../../context/RedditContext"
import { supabase } from "../../services/supabaseClient"

const style = {
  wrapper: `flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4`,
  input: `rounded border border-[#343536] bg-[#1a1a1b] px-4 py-2 text-left text-sm text-white focus:outline-none`,
  commentBtn: `rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B]`
}

const SaveComment = ({ postId }) => {

  const { currentUser } = useContext(RedditContext)
  const [input, setInput] = useState('');

  const saveComment = async () => {
    try {
      await supabase.from('comments').insert({
        author: currentUser.user_metadata.full_name,
        text: input,
        postId: postId,
        userEmail: currentUser.email
      })
    } catch (error) {
      console.error(error)
    } finally {
      setInput('');
    } 
  }

  return (
    <div className={style.wrapper}>
      <div className='text-sm'>
        Comment as{' '}
        <span className='text-[#4296CA]'>{currentUser?.user_metadata.full_name}</span>
      </div>
      <textarea valus={input} onChange={event => setInput(event.target.value)} className={style.input} cols='30' rows='8' placeholder='What are your thoughts? ' />
      <div className='flex justify-end pt-2'>
        <button onClick={saveComment} className={style.commentBtn}>Comment</button>
      </div>
    </div>
  )
}

export default SaveComment