
import { Link } from 'react-router-dom'
export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
  return (
    <div>
      <footer className="bg-gray-50 px-4 sm:px-10 py-12 mt-28">
        <div className="md:max-w-[50%] mx-auto text-center">
          <div className="bg-[#fff] border flex px-2 py-1 rounded-full text-left mt-4">
            <input type='email' placeholder='Enter your email for fitness tips and updates' className="w-full outline-none bg-transparent pl-4" />
            <button type='button'
              className="bg-[#31C48D] hover:bg-[#67C3A2] text-white rounded-full px-5 py-2.5 transition-all">Subscribe</button>
          </div>
        </div>
        <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 border-t border-gray-300 mt-10 pt-8">
          <div className="xl:col-span-2">
            <h4 className="text-xl font-semibold mb-6 text-[#31C48D]">Disclaimer</h4>
            <p className="mb-2">Our platform provides fitness tracking tools and insights, but results may vary based on individual efforts and consistency.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#31C48D]">Features</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Workout Tracking</a></li>
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Nutrition Monitoring</a></li>
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Progress Reports</a></li>
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Goal Setting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#31C48D]">Resources</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Fitclave Articles</a></li>
              <li><Link to={'/nutrition'} className="hover:text-[#67C3A2]" onClick={()=>{scrollToTop()}}>Nutrition Guides</Link></li>
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Exercise Videos</a></li>
              <li><a href="javascript:void(0)" className="hover:text-[#67C3A2]">Workouts for Beginners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#31C48D]">About Us</h4>
            <ul className="space-y-4">
              <li><Link to={'/values'} className="hover:text-[#67C3A2]" onClick={()=>{scrollToTop()}}>Fitclave Mission and Values</Link></li>
              <li><Link to={'/team'} className="hover:text-[#67C3A2]" onClick={()=>{scrollToTop()}}>Fitclave Team</Link></li>
              <li><Link to={'/feature'} className="hover:text-[#67C3A2]" onClick={()=>{scrollToTop()}}>Fitclave Tracker Features</Link></li>
              <li><Link to={'/faq'} className="hover:text-[#67C3A2]" onClick={()=>{scrollToTop()}}>Frequently Asked Questions</Link></li>
            </ul>
          </div>
        </div>
        <p className='mt-10 text-center'>© 2024 <a href='https://fitnessapp.com/' target='_blank'
          className="hover:underline mx-1">FitClave</a> All Rights Reserved.</p>
      </footer>
    </div>
  )
}
