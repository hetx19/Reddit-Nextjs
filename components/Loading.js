import { LoadingAnimation } from '../assets/LoadingAnimation'

const style = {
  wrapper: `fixed insert-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-black/80`,
  loadingIcon: `mr-2 h-20 w-20 animate-spin fill-white text-gray-600`,
  loadingText: `text-center text-2xl font-semibold text-white`
}

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <LoadingAnimation style={style} />
      <h2 className={style.loadingText}>Loading...</h2>
    </div>
  )
}

export default Loading