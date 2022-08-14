import Post from "../common/Post"

// const posts = [
//   { id: 0, title: 'Build Reddit', author: 'Harshal Savaliya' },
//   { id: 1, title: 'Build Medium', author: 'Harshal Savaliya' },
//   { id: 2, title: 'Build Coinbase', author: 'Harshal Savaliya' }
// ]

const style = {
  wrapper: `space-y-2.5`
}

const Feed = ({ posts }) => {
  return (
    <div className={style.wrapper}>
      {posts.map((post, id) => (
        <Post {...post} key={id} />
      ))}
    </div>
  )
}

export default Feed