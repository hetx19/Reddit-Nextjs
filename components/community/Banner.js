import Image from 'next/image'

const style = {
  wrapper: 'mt-14 flex flex-col',
  bannerImage: 'h-52 relative',
  bannerContentWrapper: 'mx-auto max-w-5xl px-6 py-2',
  profileInfoWrapper: 'flex items-start space-x-4 pb-5',
  profilePicWrapper: `-mt-6 h-20 w-20 relative`,
  profilePic:
    'h-full w-full rounded-full border-4 border-white bg-white bg-cover object-contain',
  titleWrapper: 'mt-1',
  title: 'text-2xl font-bold text-[#D7DADC]',
  tag: 'pt-1 text-sm text-gray-400',
  joinButtonContainer: 'mt-1 flex items-center',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold',
}

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bannerImage}>
        <Image
          src='https://i.ibb.co/27918K9/channels4-banner.jpg'
          layout='fill'
          className='object-cover'
          alt=''
        />
      </div>
      <div className='bg-[#1a1a1b]'>
        <div className={style.bannerContentWrapper}>
          <div className={style.profileInfoWrapper}>
            <div className={style.profilePicWrapper}>
              <Image
                className={style.profilePic}
                src='https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png'
                layout='fill'
                alt=''
              />
            </div>

            <div className={style.titleWrapper}>
              <h1 className={style.title}>Harshal Savaliya</h1>
              <h2 className={style.tag}>Harshal Savaliya</h2>
            </div>

            <div className={style.joinButtonContainer}>
              <button className={style.joinedButton}>Joined</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
