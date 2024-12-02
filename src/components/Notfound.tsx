
import { FaSadTear } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        404 - Page Not found
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <div className="bg-red-600 p-6 rounded-full mb-6 animate-pulse">
      <FaSadTear size={80} color="gray" />
      </div>
      <p className="text-lg md:text-xl text-gray-400 mb-10">
      It seems you clicked on a broken link or got lost along the way.
      </p>
    </div>
  )
}

export default NotFound