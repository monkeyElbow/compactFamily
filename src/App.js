import { AuthProvider } from './util/AuthContext';

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
import stories from "./pages/storiesPage";
import HillcrestPage from "./pages/HillcrestPage";
import HighlandsPage from "./pages/HighlandsPage";
import highlandsConnect from "./pages/highlands-training/highlands-training";
import highlandsConnectWeek1 from "./pages/highlands-training/week1";
import highlandsConnectWeek2 from "./pages/highlands-training/week2";
import highlandsConnectWeek3 from "./pages/highlands-training/week3";
import highlandsConnectWeek4 from "./pages/highlands-training/week4";
import highlandsConnectWeek5 from "./pages/highlands-training/week5";
import highlandsConnectWeek6 from "./pages/highlands-training/week6";
import highlandsConnectWeek7 from "./pages/highlands-training/week7";
import highlandsConnectWeek8 from "./pages/highlands-training/week8";
import highlandsConnectWeek10 from "./pages/highlands-training/week10";
import highlandsConnectWeek11 from "./pages/highlands-training/week11";
import highlandsConnectWeek12 from "./pages/highlands-training/week12";

import highlandsLeader from "./pages/highlands-leader/highlands-leader";

import FostercarePage from "./pages/FostercarePage";
import fosterform from './pages/fosterform';
import EmploymentPage from "./pages/EmploymentPage";
import JobPage from "./pages/JobPage";
import teams from "./pages/teams";
import volunteer from "./pages/volunteer";

import CompaCarePage from "./pages/CompaCarePage";
import compactPracticePage from "./pages/compactPracticePage";

import CompaCareTrainingPage from "./pages/compacare-training/CompaCareTrainingPage";
import CompaCareTrainingMaterials from "./pages/compacare-training/materials";
import compaCareRegister from "./pages/compacare-training/compaCareRegister";
import compaCareTrainingSessions from "./pages/compacare-training/sessions";
import compaCareTrainingSession1 from "./pages/compacare-training/session1";
import compaCareTrainingSession2 from "./pages/compacare-training/session2";
import compaCareTrainingSession3 from "./pages/compacare-training/session3";
import compaCareTrainingSession4 from "./pages/compacare-training/session4";
import compaCareTrainingCertificate from "./pages/compacare-training/CompaCareCertificate";




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

import Partners from "./pages/Partners";
import Products from "./pages/Products";
import newsletter from "./pages/newsletter";

import Brand from "./pages/Brand";

import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticlesListPage";

import NotFoundPage from "./pages/NotFoundPage";


import MenuMain from "./components/MenuMain";

import Banner from "./components/Banner";
import PlannedGiving from "./pages/PlannedGivingPage";

import isaiah58offering from "./pages/isaiah58offering";
import isaiah58Sermon from "./pages/isaiah58Sermon";
import hostFamilies from "./pages/host-families";

import ScrollToTop from "./components/ScrollToTop";

import ReactGA from 'react-ga'
import {createBrowserHistory} from 'history'
import { useEffect } from "react";

import Dashboard from "./pages/users/dashboard"
import PrivateRoute from './components/PrivateRoute';
import Signin from "./pages/users/signin";
import Signup from './pages/users/signup';
import ForgotPassword from './pages/users/forgotPassword';
import UpdatePassword from './pages/users/updatePassword';
import CreateProfile from './pages/users/createProfile';

// am trying to delete browserrouter as, for GA to work
// remove this double once proven

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHome from './pages/admin/admin';

// import { Router, Route, Switch } from "react-router-dom";


function App() {

ReactGA.initialize('UA-145080690-2')

  const history = createBrowserHistory()
  history.listen(location => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
   
  }, [history])

  return (
    <Router history={history}>
            <AuthProvider>

      <ScrollToTop />
      <div className="App">
        <MenuMain />
        <Banner />
        <div id="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/welcome" component={WelcomePage} />
            <Route exact path="/mission" component={MissionPage} />

            <Route exact path="/articles" component={ArticleListPage} />
            {/* <Route path="/articles/:id" component={ArticlePage} /> */}

            <Route path="/training/:id" componenet={ArticlePage} />

            <Route exact path="/announcements" component={AnnouncementsPage} />
            <Route
              exact
              path="/announcements/:id"
              component={AnnouncementPage}
            />

            <Route exact path="/leadership" component={LeadershipPage} />
            <Route exact path="/campus" component={CampusPage} />
            <Route exact path="/history-and-future" component={HistoryPage} />
            <Route exact path="/stories" component={stories} />

            <Route exact path="/hillcrest" component={HillcrestPage} />
            <Route exact path="/highlands" component={HighlandsPage} />
            <Route exact path="/fostercare" component={FostercarePage} />
            <Route exact path="/fosterform" component={fosterform} />
            <Route exact path="/employment" component={EmploymentPage} />
            <Route exact path="/employment/:id" component={JobPage} />
            <Route exact path="/compacare" component={CompaCarePage} />
            <Route exact path="/compacare-practice" component={compactPracticePage} />


            <Route exact path="/find" component={FindPage} />
            <Route exact path="/safecare" component={SafecarePage} />

            <Route exact path="/pray" component={PrayPage} />
            <Route
              exact
              path="/pray-the-promises-calendar"
              component={PrayPromises}
            />
            <Route
              exact
              path="/thirty-days-of-prayer"
              component={ThirtyDaysPrayer}
            />
            <Route exact path="/give" component={GivePage} />
            <Route exact path="/give-gifts" component={GiveGifts} />
            <Route exact path="/planned-giving" component={PlannedGiving} />
            <Route exact path="/sponsor" component={Sponsor} />
            <Route exact path="/special-projects" component={SpecialProjects} />
            <Route exact path="/serve" component={ServePage} />
            <Route exact path="/teams" component={teams} />
            <Route exact path='/host-families' component={hostFamilies} />
            <Route exact path='/volunteer' component={volunteer} />

            <Route exact path="/products" component={Products} />
            <Route exact path="/newsletter" component={newsletter} />
            <Route exact path="/Partners" component={Partners} />

            <Route
              exact
              path="/highlands-training"
              component={highlandsConnect}
            />
            <Route
              exact
              path="/highlands-training"
              component={highlandsConnect}
            />
            <Route
              exact
              path="/highlands-training-week-1"
              component={highlandsConnectWeek1}
            />
            <Route
              exact
              path="/highlands-training-week-2"
              component={highlandsConnectWeek2}
            />
            <Route
              exact
              path="/highlands-training-week-3"
              component={highlandsConnectWeek3}
            />
            <Route
              exact
              path="/highlands-training-week-4"
              component={highlandsConnectWeek4}
            />
            <Route
              exact
              path="/highlands-training-week-5"
              component={highlandsConnectWeek5}
            />
            <Route
              exact
              path="/highlands-training-week-6"
              component={highlandsConnectWeek6}
            />
            <Route
              exact
              path="/highlands-training-week-7"
              component={highlandsConnectWeek7}
            />
            <Route
              exact
              path="/highlands-training-week-8"
              component={highlandsConnectWeek8}
            />
            <Route
              exact
              path="/highlands-training-week-10"
              component={highlandsConnectWeek10}
            />
            <Route
              exact
              path="/highlands-training-week-11"
              component={highlandsConnectWeek11}
            />
            <Route
              exact
              path="/highlands-training-week-12"
              component={highlandsConnectWeek12}
            />



            <Route
              exact
              path="/highlands-leader"
              component={highlandsLeader}
            />


            <Route
              exact
              path="/compacare-training"
              component={CompaCareTrainingPage}
            />
            <Route
              exact
              path="/compacare-training-materials"
              component={CompaCareTrainingMaterials}
            />
            <PrivateRoute
              exact
              path="/compacare-training-register"
              component={compaCareRegister}
            />
            <PrivateRoute
              exact
              path="/compacare-training-sessions"
              component={compaCareTrainingSessions}
            />
            <PrivateRoute
              exact
              path="/compacare-training-session-1"
              component={compaCareTrainingSession1}
            />
            <PrivateRoute
              exact
              path="/compacare-training-session-2"
              component={compaCareTrainingSession2}
            />
            <PrivateRoute
              exact
              path="/compacare-training-session-3"
              component={compaCareTrainingSession3}
            />
            <PrivateRoute
              exact
              path="/compacare-training-session-4"
              component={compaCareTrainingSession4}
            />
            <PrivateRoute
              exact
              path="/compacare-training-certificate"
              component={compaCareTrainingCertificate}
            />

            <Route exact path="/brand" component={Brand} />

{/* seasonal or temporary pages */}
            <Route path="/isaiah58offering" component={isaiah58offering} />
            <Route path="/isaiah58sermon" component={isaiah58Sermon} />


            {/* users */}
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/admin" component={AdminHome} />
            <PrivateRoute path="/update-password" component={UpdatePassword} />
            <PrivateRoute path="/create-profile" component={CreateProfile} />
            <Route path="/signin" component={Signin} />
            <Route path="/login" component={Signin} />
            <Route path="/signup" component={Signup} />
            
            <Route component={NotFoundPage} />
            
          </Switch>
          <Footer />
        </div>
      </div>
      </AuthProvider>

    </Router>
  );
}

export default App;
