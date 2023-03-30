import { AuthProvider } from "./util/AuthContext";

import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactPage";
import WelcomePage from "./pages/WelcomePage";
import Footer from "./components/Footer";
import MissionPage from "./pages/MissionPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AnnouncementPage from "./pages/AnnouncementPage";
import LeadershipPage from "./pages/LeadershipPage";
import CampusPage from "./pages/CampusPage";
import HistoryPage from "./pages/HistoryPage";
import Stories from "./pages/storiesPage";
import HillcrestPage from "./pages/HillcrestPage";
import HighlandsPage from "./pages/HighlandsPage";
import HighlandsConnect from "./pages/highlands-training/highlands-training";
import HighlandsConnectWeek1 from "./pages/highlands-training/week1";
import HighlandsConnectWeek2 from "./pages/highlands-training/week2";
import HighlandsConnectWeek3 from "./pages/highlands-training/week3";
import HighlandsConnectWeek4 from "./pages/highlands-training/week4";
import HighlandsConnectWeek5 from "./pages/highlands-training/week5";
import HighlandsConnectWeek6 from "./pages/highlands-training/week6";
import HighlandsConnectWeek7 from "./pages/highlands-training/week7";
import HighlandsConnectWeek8 from "./pages/highlands-training/week8";
import HighlandsConnectWeek10 from "./pages/highlands-training/week10";
import HighlandsConnectWeek11 from "./pages/highlands-training/week11";
import HighlandsConnectWeek12 from "./pages/highlands-training/week12";

import HighlandsLeader from "./pages/highlands-leader/HighlandsLeader";

import FostercarePage from "./pages/fostercare/FostercarePage";
import Fosterform from "./pages/fostercare/components/fosterform";
import Placements from "./pages/fostercare/Placements";
import EmploymentPage from "./pages/EmploymentPage";
import JobPage from "./pages/JobPage";
import Teams from "./pages/teams";
import Volunteer from "./pages/volunteer";

import CompaCareHome from "./pages/compacare/CompaCareHome";
// import CompaCarePractice from "./pages/compacare/components/CompaCarePractice"

import CompaCareTrainingPage from "./pages/compacare-training/CompaCareTrainingPage";
import CompaCareTrainingMaterials from "./pages/compacare-training/materials";
import CompaCareRegister from "./pages/compacare-training/compaCareRegister";
import CompaCareTrainingSessions from "./pages/compacare-training/sessions";
import CompaCareTrainingSession1 from "./pages/compacare-training/session1";
import CompaCareTrainingSession2 from "./pages/compacare-training/session2";
import CompaCareTrainingSession3 from "./pages/compacare-training/session3";
import CompaCareTrainingSession4 from "./pages/compacare-training/session4";
import CompaCareTrainingCertificate from "./pages/compacare-training/CompaCareCertificate";

import FindPage from "./pages/FindPage";
import SafecarePage from "./pages/SafecarePage";

import PrayPage from "./pages/PrayPage";
import ThirtyDaysPrayer from "./pages/ThirtyDaysOfPrayer";
import PrayPromises from "./pages/PrayPromisesCalendar";

import GivePage from "./pages/GivePage";
import GiveGifts from "./pages/GiveGifts";
import Sponsor from "./pages/Sponsor";
import SpecialProjects from "./pages/SpecialProjects";
import ServePage from "./pages/ServePage";
import Internships from "./pages/Insternships";

import Partners from "./pages/Partners";
import Products from "./pages/Products";
import NewsletterPage from "./pages/newsletter/newsletter";

import Brand from "./pages/Brand";

import ArticlePage from "./pages/ArticlePage";
// import ArticleListPage from "./pages/ArticlesListPage";

import NotFoundPage from "./pages/NotFoundPage";

import MenuMain from "./components/MenuMain";

import Banner from "./components/Banner";
import PlannedGiving from "./pages/PlannedGivingPage";

import Isaiah58offering from "./pages/isaiah58offering";
import Isaiah58Sermon from "./pages/isaiah58Sermon";
import HostFamilies from "./pages/host-families";

import ScrollToTop from "./components/ScrollToTop";

import ReactGA from "react-ga4";
// import { createBrowserHistory } from "history";
// import { useEffect } from "react";

import Dashboard from "./pages/users/dashboard";
// import PrivateRoute from "./components/PrivateRoute";
import Signin from "./pages/users/signin";
import Signup from "./pages/users/signup";
import ForgotPassword from "./pages/users/forgotPassword";
import UpdatePassword from "./pages/users/updatePassword";
import CreateProfile from "./pages/users/UpdateProfile";

// admin
import AdminHome from "./pages/admin/admin";
import AdminCompacare from "./pages/admin/adminCompacare";
// am trying to delete browserrouter as, for GA to work
// remove this double once proven

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminContact from "./pages/admin/adminContact";
import AdminCompacareTraining from "./pages/admin/adminCompacareTraining";
import ChristmasPage from "./pages/seasonalPages/christmasPage";
// import ProfileImageUpdater from './pages/users/components/ProfileImage';

import YearEndGiving from "./pages/YearEndGiving";

import { useAuth } from "./util/AuthContext";

export default function App() {
  
  ReactGA.initialize("G-FBELT9ERKR");
  ReactGA.send({ hittype:"pageview", page: window.location.pathname });



  function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/signin" />;
  }

  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="App">
          <MenuMain />
          <Banner />
          <div id="page-body">
            <Routes>
              {/* <Route path="/articles/:id" element={<ArticlePage />} /> */}

              <Route path="/" element={<HomePage />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="welcome" element={<WelcomePage />} />
              <Route path="mission" element={<MissionPage />} />
              <Route path="yearendgiving" element={<YearEndGiving />} />

              {/* <Route path="articles" element={<ArticleListPage />} /> */}

              <Route path="training/:id" element={<ArticlePage />} />

              <Route path="announcements" element={<AnnouncementsPage />} />
              <Route path="announcements/:id" element={<AnnouncementPage />} />

              <Route path="leadership" element={<LeadershipPage />} />
              <Route path="campus" element={<CampusPage />} />
              <Route path="history-and-future" element={<HistoryPage />} />
              <Route path="stories" element={<Stories />} />

              <Route path="hillcrest" element={<HillcrestPage />} />
              <Route path="highlands" element={<HighlandsPage />} />
              <Route path="fostercare" element={<FostercarePage />} />
              <Route path="fostercareinfo" element={<Fosterform />} />
              <Route path="placements" element={<Placements />} />
              <Route path="employment" element={<EmploymentPage />} />
              <Route path="jobs" element={<EmploymentPage />} />
              <Route path="employment/:id" element={<JobPage />} />
              <Route path="compacare" element={<CompaCareHome />} />

              <Route path="find" element={<FindPage />} />
              <Route path="safecare" element={<SafecarePage />} />

              <Route path="pray" element={<PrayPage />} />
              <Route
                path="pray-the-promises-calendar"
                element={<PrayPromises />}
              />
              <Route
                path="thirty-days-of-prayer"
                element={<ThirtyDaysPrayer />}
              />
              <Route path="give" element={<GivePage />} />
              <Route path="give-gifts" element={<GiveGifts />} />
              <Route path="planned-giving" element={<PlannedGiving />} />
              <Route path="sponsor" element={<Sponsor />} />
              <Route path="special-projects" element={<SpecialProjects />} />
              <Route path="serve" element={<ServePage />} />
              <Route path="teams" element={<Teams />} />
              <Route path="host-families" element={<HostFamilies />} />
              <Route path="volunteer" element={<Volunteer />} />
              <Route path="internships" element={<Internships />} />

              <Route path="products" element={<Products />} />
              <Route path="newsletter" element={<NewsletterPage />} />
              <Route path="Partners" element={<Partners />} />

              <Route
                path="highlands-training"
                element={<HighlandsConnect />}
              />
              <Route
                path="highlands-training"
                element={<HighlandsConnect />}
              />
              <Route
                path="highlands-training-week-1"
                element={<HighlandsConnectWeek1 />}
              />
              <Route
                path="highlands-training-week-2"
                element={<HighlandsConnectWeek2 />}
              />
              <Route
                path="highlands-training-week-3"
                element={<HighlandsConnectWeek3 />}
              />
              <Route
                path="highlands-training-week-4"
                element={<HighlandsConnectWeek4 />}
              />
              <Route
                path="highlands-training-week-5"
                element={<HighlandsConnectWeek5 />}
              />
              <Route
                path="highlands-training-week-6"
                element={<HighlandsConnectWeek6 />}
              />
              <Route
                path="highlands-training-week-7"
                element={<HighlandsConnectWeek7 />}
              />
              <Route
                path="highlands-training-week-8"
                element={<HighlandsConnectWeek8 />}
              />
              <Route
                path="highlands-training-week-10"
                element={<HighlandsConnectWeek10 />}
              />
              <Route
                path="highlands-training-week-11"
                element={<HighlandsConnectWeek11 />}
              />
              <Route
                path="highlands-training-week-12"
                element={<HighlandsConnectWeek12 />}
              />

              <Route path="highlands-leader" element={<HighlandsLeader />} />

              <Route
                path="compacare-training"
                element={<CompaCareTrainingPage />}
              />
              <Route
                path="compacare-training-materials"
                element={<CompaCareTrainingMaterials />}
              />

              <Route
                path="compacare-training-register"
                element={
                <PrivateRoute>
                  <CompaCareRegister />
                </PrivateRoute>
                }
              />
              <Route
                path="compacare-training-sessions"
                element={
                <PrivateRoute>
                  <CompaCareTrainingSessions />
                </PrivateRoute>
                }
                />
              <Route
                path="compacare-training-session-1"
                element={
                  <PrivateRoute>
                    <CompaCareTrainingSession1 />
                  </PrivateRoute>
              }
              />
              <Route
                path="compacare-training-session-2"
                element={
                  <PrivateRoute>
                    <CompaCareTrainingSession2 />
                  </PrivateRoute>
              }
              />
              <Route
                path="compacare-training-session-3"
                element={
                <PrivateRoute>
                  <CompaCareTrainingSession3 />
                </PrivateRoute>
              }
              />
              <Route
                path="compacare-training-session-4"
                element={
                  <PrivateRoute>
                    <CompaCareTrainingSession4 />
                  </PrivateRoute>
                }
                />
              <Route
                path="compacare-training-certificate"
                element={
                  <PrivateRoute>
                    <CompaCareTrainingCertificate />
                  </PrivateRoute>
              }
              />

              <Route path="brand" element={<Brand />} />

              {/* seasonal or temporary pages */}
              <Route path="isaiah58offering" element={<Isaiah58offering />} />
              <Route path="isaiah58sermon" element={<Isaiah58Sermon />} />

              <Route path="christmas" element={<ChristmasPage />} />

              {/* users */}
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              {/* <PrivateRoute path="update-profile-pic" element={<ProfileImageUpdater />} /> */}
              <Route
                path="admin"
                element={
                  <PrivateRoute>
                    <AdminHome />
                  </PrivateRoute>
                }
              />
              <Route
                path="admin-compacare"
                element={
                  <PrivateRoute>
                    <AdminCompacare />
                  </PrivateRoute>
                }
              />
              <Route
                path="admin-compacare-training"
                element={
                  <PrivateRoute>
                    <AdminCompacareTraining />
                  </PrivateRoute>
                }
              />
              <Route
                path="admin-contact"
                element={
                  <PrivateRoute>
                    <AdminContact />
                  </PrivateRoute>
                }
              />

              <Route
                path="update-password"
                element={
                  <PrivateRoute>
                    <UpdatePassword />
                  </PrivateRoute>
                }
              />
              <Route
                path="create-profile"
                element={
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="signin" element={<Signin />} />
              <Route path="login" element={<Signin />} />
              <Route path="signup" element={<Signup />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

