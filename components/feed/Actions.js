import { AnnotationIcon, GiftIcon, ShareIcon } from '@heroicons/react/outline'

const style = {
  wrapper: `flex items-center space-x-4 pt-2`,
  iconContainer: `flex items-center space-x-1 text-[#818384]`,
  icon: `h-4 w-4`
}

const Actions = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <AnnotationIcon className={style.icon} />
        <span className='text-xs'>19 Comments</span>
      </div>
      <div className={style.iconContainer}>
        <GiftIcon className={style.icon} />
        <span className='text-xs'>Awards</span>
      </div>
      <div className={style.iconContainer}>
        <ShareIcon className={style.icon} />
        <span className='text-xs'>Shares</span>
      </div>
    </div>
  )
}

export default Actions