
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Interface/Footer'
import { Navbar } from './components/Interface/Navbar'
import { Landing } from './components/Interface/Landing'
import { About } from './components/Interface/About'
import { Values } from './components/Interface/Values'
import { Features } from './components/Interface/Features'
import { Teams } from './components/Interface/Teams'
import { Contactus } from './components/Interface/Contactus'

import Home from './components/Home'
import NotFound from './components/Notfound'
import DashboardHome from './components/Dashboard/Home'
import NutritionMonitor from './components/Dashboard/NutritionMonitor'
// import UpdateFoodForm from './components/Dashboard/UpdateFoodForm';
import { Nutrition } from './components/Interface/Nutrition'
import { FAQ } from './components/Interface/Faq'
import { SignUp } from './components/Auth/signup'
import { Login } from './components/Auth/login'
import { ForgotPassword } from './components/Auth/forget'
import ResetPassword from './components/Auth/reset'
import EmailVerification from './components/Auth/verify'
import MessageVerification from './components/Auth/msg'

import WorkoutForm from './components/Dashboard/WorkoutForm'
import Profile from './components/Dashboard/Profile'
import { Analytics } from './components/Dashboard/Analytics'
import ProtectedRoute from './utils/ProtectedRoutes'
import { injectStyle } from "react-toastify/dist/inject-style";
import DashboardLayout from './components/Dashboard/Layout'
import PrivacyPolicy from './components/Interface/PrivacyPolicy'

import WorkoutsList from './components/Dashboard/WorkoutList'
import { Workout } from './components/Interface/Workout'
import FollowedWorkouts from './components/Dashboard/FollowedWorkouts'
import SettingsComponent from './components/Dashboard/Settings'
import WorkoutDay from './components/Dashboard/WorkoutsPerDay'
import ProgressMonitor from './components/Dashboard/ProgressMonitor'
// import BodyPartButtons from './components/Dashboard/BodyShape'





function App() {

  injectStyle();

  return (
    <>
      <Routes>
        {/* Authentication Routes */}
        <Route path='/sign' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forget-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/email-verification' element={<EmailVerification></EmailVerification>}></Route>
        <Route path='/msg' element={<MessageVerification></MessageVerification>}></Route>

        {/* Landing page Interface Routes */}
        
        <Route path='/' element={<Home />}>
          <Route path='*' element={<NotFound/>}></Route>
          <Route index element={<Landing />}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/values' element={<Values></Values>}></Route>
          <Route path='/feature' element={<Features></Features>}></Route>
          <Route path='/nutrition' element={<Nutrition></Nutrition>}></Route>
          <Route path='/team' element={<Teams></Teams>}></Route>
          <Route path='/faq' element={<FAQ></FAQ>}></Route>
          <Route path='/privacypolicy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/workout' element={<Workout></Workout>}></Route>
          <Route path='/contactus' element={<Contactus></Contactus>}></Route>
          
        </Route>

        {/* Dashboard Routes */}

        <Route path='/dashboard' element={
            <ProtectedRoute><DashboardLayout /></ProtectedRoute>

          }>
          <Route index element={<DashboardHome/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='nutri-mon' element={<NutritionMonitor/>}></Route>
          <Route path='workoutform' element ={<WorkoutForm/>}></Route>
          <Route path='workoutlist' element ={<WorkoutsList/>}></Route>
          <Route path='workoutdays' element ={<WorkoutDay/>}></Route>
         
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='settings' element={<SettingsComponent/>}></Route>
          {/* <Route path="update-food" element={<UpdateFoodForm />}></Route> */}
          <Route path='progress-track' element={<ProgressMonitor/>}/>
          {/* <Route path='body-measure' element={<BodyPartButtons/>}></Route> */}
         
          <Route path='analytics' element={<Analytics></Analytics>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
