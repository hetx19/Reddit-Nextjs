
const style = {
  wrapper: `flex items-center space-x-1 text-xs text-[#818384]`,
  profilePicContainer: `flex items-center space-x-1`,
  profilePic: `h-4 w-4 rounded-full`,
  tag: `text-xs cursor-pointer font-semibold text-[#D7DADC] hover:underline`,
  postedBy: `flex items-center space-x-1`
}

const Info = ({ author }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img className={style.profilePic} src='https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png' />
      </div>

      <div className={style.tag}>Harshal Savaliya</div>

      <div className='text-3xl'>·</div>

      <div className={style.postedBy}>
        <span>Posted by {author}</span>
      </div>

      <div className='text-3xl'>·</div>

      <span>Jun 15</span>
    </div>
  )
}

export default Info