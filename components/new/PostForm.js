import { supabase } from '../../services/supabaseClient'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Loading from '../Loading'

const style = {
  wrapper: 'flex flex-col space-y-6',
  title: `border-b border-[#343536] pb-3 text-lg font-medium`,
  input: `bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none`,
  postBtnContainer: `flex justify-end`,
  postBtn: `bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B] rounded-full`
}

const PostForm = () => {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const createPost = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await supabase.from('feed').insert([
        {
          author: 'Harshal Savaliya',
          title,
          content
        }
      ]);
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
      router.push('/');
    }
  }

  return (
    <div className={style.wrapper}>
      {isLoading && <Loading />}
      <h1 cassName={style.title}>Create a Post</h1>

      <div className='flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4'>
        <input className={style.input} value={title} onChange={event => setTitle(event.currentTarget.value)} type="text" placeholder='Title (required)' />

        <textarea className={style.input} value={content} onChange={event => setContent(event.currentTarget.value)} name='content' id='content' cols='30' rows='10' placeholder='Text (required)' />

        <div className={style.postBtnContainer}>
          <button onClick={createPost} className={style.postBtn}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default PostForm