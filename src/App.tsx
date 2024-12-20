
import './App.css'

import { Route, Routes } from 'react-router-dom'

import { Landing } from './pages/Interface/Landing'
import { About } from './pages/Interface/About'
import { Values } from './pages/Interface/Values'
import { Features } from './pages/Interface/Features'
import { Teams } from './pages/Interface/Teams'
import { Contactus } from './pages/Interface/Contactus'

import InterfaceLayout from './pages/Interface/Layout'
import NotFound from './pages/Notfound'
import DashboardHome from './pages/Dashboard/Home'
import NutritionMonitor from './pages/Dashboard/NutritionMonitor'
// import UpdateFoodForm from './pages/Dashboard/UpdateFoodForm';
import { Nutrition } from './pages/Interface/Nutrition'

import { FAQ } from './pages/Interface/Faq'
import { SignUp } from './pages/Auth/signup'
import { Login } from './pages/Auth/login'
import { ForgotPassword } from './pages/Auth/forget'
import ResetPassword from './pages/Auth/reset'
import EmailVerification from './pages/Auth/verify'
import MessageVerification from './pages/Auth/msg'

import WorkoutForm from './pages/Dashboard/WorkoutForm'
import Profile from './pages/Dashboard/Profile'
import { Analytics } from './pages/Dashboard/Analytics'
import ProtectedRoute from './utils/ProtectedRoutes'
import { injectStyle } from "react-toastify/dist/inject-style";
import DashboardLayout from './pages/Dashboard/Layout'
import PrivacyPolicy from './pages/Interface/PrivacyPolicy'

import WorkoutsList from './pages/Dashboard/WorkoutList'
import { Workout } from './pages/Interface/Workout'
import FollowedWorkouts from './pages/Dashboard/FollowedWorkouts'
import SettingsComponent from './pages/Dashboard/Settings'
import WorkoutDay from './pages/Dashboard/WorkoutsPerDay'
import ProgressMonitor from './pages/Dashboard/ProgressMonitor'
// import BodyPartButtons from './pages/Dashboard/BodyShape'





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
        
        <Route path='/' element={<InterfaceLayout />}>
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
