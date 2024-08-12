/* eslint-disable react/jsx-pascal-case */
import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  Suspense,
  lazy,
} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { reducer, initialState } from "./reducers/userReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";
import spinnerlogo from "./components/images/Group.svg";
import MainLayout from "./layout/mainLayout";
import Roadmap_Devops from "./components/roadmap_devops";
import Roadmap_DataScientist from "./components/roadmap_datascientist";
import Roadmap_MobileDeveloper from "./components/roadmap_mobiledeveloper";
import PageNotFound from "./components/PageNotFound";

export const UserContext = createContext();
const Home = lazy(() => import("./components/homepage"));
const Login = lazy(() => import("./components/login"));
const Register = lazy(() => import("./components/register"));
const UpdateProfile = lazy(() => import("./components/updateprofile"));
const Courses = lazy(() => import("./components/courses"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const OTP = lazy(() => import("./components/OTP"));
const Term = lazy(() => import("./components/term"));
const Privacy = lazy(() => import("./components/privacy"));
const Resume = lazy(() => import("./components/resume"));
const Portfolio = lazy(() => import("./components/portfolio"));
const Gate = lazy(() => import("./components/gate"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const WatchVideo = lazy(() => import("./components/watch_video"));
const Sem_1_Fop_Units = lazy(() => import("./components/Sem_1_Fop_Units"));
const Sem_1_Maths_Units = lazy(() => import("./components/Sem_1_Maths_Units"));
const Sem_1_Eoc_Units = lazy(() => import("./components/Sem_1_Eoc_Units"));
const Sem_1_Eg_Units = lazy(() => import("./components/Sem_1_Eg_Units"));
const Sem_1_Ep_Units = lazy(() => import("./components/Sem_1_Ep_Units"));
const Sem_1_Es_Units = lazy(() => import("./components/Sem_1_Es_Units"));
const Sem_2_Oopc_Units = lazy(() => import("./components/Sem_2_Oopc_Units"));
const Sem_2_Maths_Units = lazy(() => import("./components/Sem_2_Maths_Units"));
const Sem_2_Beee_Units = lazy(() => import("./components/Sem_2_Beee_Units"));
const Sem_2_Fme_Units = lazy(() => import("./components/Sem_2_Fme_Units"));
const Sem_2_Bcps_Units = lazy(() => import("./components/Sem_2_Bcps_Units"));
const Sem_2_Workshop_Units = lazy(() =>
  import("./components/Sem_2_Workshop_Units")
);
const Sem_3_Dsa_Units = lazy(() => import("./components/Sem_3_Dsa_Units"));
const Sem_3_Maths_Units = lazy(() => import("./components/Sem_3_Maths_Units"));
const Sem_3_Dbms_Units = lazy(() => import("./components/Sem_3_Dbms_Units"));
const Sem_3_De_Units = lazy(() => import("./components/Sem_3_De_Units"));
const Sem_3_Itw_Units = lazy(() => import("./components/Sem_3_Itw_Units"));
const Sem_4_Oopj_Units = lazy(() => import("./components/Sem_4_Oopj_Units"));
const Sem_4_Psnm_Units = lazy(() => import("./components/Sem_4_Psnm_Units"));
const Sem_4_Os_Units = lazy(() => import("./components/Sem_4_Os_Units"));
const Sem_4_Coa_Units = lazy(() => import("./components/Sem_4_Coa_Units"));
const Sem_4_Pom_Units = lazy(() => import("./components/Sem_4_Pom_Units"));
const Sem_5_Ajp_Units = lazy(() => import("./components/Sem_5_Ajp_Units"));
const Sem_5_Daa_Units = lazy(() => import("./components/Sem_5_Daa_Units"));
const Sem_5_Se_Units = lazy(() => import("./components/Sem_5_Se_Units"));
const Sem_5_Toc_Units = lazy(() => import("./components/Sem_5_Toc_Units"));
const Sem_5_Cn_Units = lazy(() => import("./components/Sem_5_Cn_Units"));
const Sem_5_Map_Units = lazy(() => import("./components/Sem_5_Map_Units"));
const Sem_5_Python_Units = lazy(() =>
  import("./components/Sem_5_Python_Units")
);
const Sem_5_SOA_Units = lazy(() => import("./components/Sem_5_SOA_Units"));
const Sem_6_Sc_Units = lazy(() => import("./components/Sem_6_Sc_Units"));
const Sem_6_Dc_Units = lazy(() => import("./components/Sem_6_Dc_Units"));
const Sem_6_Ee_Units = lazy(() => import("./components/Sem_6_Ee_Units"));
const Sem_6_Ml_Units = lazy(() => import("./components/Sem_6_Ml_Units"));
const Sem_6_Py_Units = lazy(() => import("./components/Sem_6_Py_Units"));
const Sem_6_Ai_Units = lazy(() => import("./components/Sem_6_Ai_Units"));
const Sem_6_Iot_Units = lazy(() => import("./components/Sem_6_Iot_Units"));
const Sem_6_Cns_Units = lazy(() => import("./components/Sem_6_Cns_Units"));
const Sem_6_Is_Units = lazy(() => import("./components/Sem_6_Is_Units"));
const Sem_6_Ap_Units = lazy(() => import("./components/Sem_6_Ap_Units"));
const Sem_7_BT_Units = lazy(() => import("./components/Sem_7_BT_Units"));
const Sem_7_CD_Units = lazy(() => import("./components/Sem_7_CD_Units"));
const Sem_7_CS_Units = lazy(() => import("./components/Sem_7_CS_Units"));
const Sem_7_DS_Units = lazy(() => import("./components/Sem_7_DS_Units"));
const Sem_7_IP_Units = lazy(() => import("./components/Sem_7_IP_Units"));
const Sem_7_NLP_Units = lazy(() => import("./components/Sem_7_NLP_Units"));
const Sem_7_WDM_Units = lazy(() => import("./components/Sem_7_WDM_Units"));
const Sem_7_CC_Units = lazy(() => import("./components/Sem_7_CC_Units"));
const Sem_8_BDA_Units = lazy(() => import("./components/Sem_8_BDA_Units"));
const Sem_8_NGN_Units = lazy(() => import("./components/Sem_8_NGN_Units"));

const Admin_Pdf_Form = lazy(() => import("./components/admin_pdf_form"));
const Userlist = lazy(() => import("./components/userlist"));
const Contributor_Form = lazy(() => import("./components/contributor_form"));
const Event_Form = lazy(() => import("./components/event_form"));
const Roadmap_Frontend = lazy(() => import("./components/roadmap_frontend"));
const Roadmap_Mern = lazy(() => import("./components/roadmap_mern"));
const Roadmap_Backend = lazy(() => import("./components/roadmap_backend"));
const Form = lazy(() => import("./components/Form"));
const NewHome = lazy(() => import("./components/newhome"));
const Blog = lazy(() => import("./components/Blog"));
const Youtube_Lecture = lazy(() => import("./components/youtube_lecture"));
const Support = lazy(() => import("./components/support"));

const LoadingSpinner = () => (
  <div className="loading-spinner bg-[#ffffff] dark:bg-[#020813] ">
    {/* Replace 'logo.svg' with the path to your SVG logo */}
    <img src={spinnerlogo} alt="Loading" className="spinner-logo " />
  </div>
);

const Routing = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const allowedPaths = [
      "/",
      "/login",
      "/register",
      "/otp",
      "/resetpassword",
      "/forgotpassword",
    ]; // Add the paths that don't require login
    const isAllowedPath = allowedPaths.some((path) =>
      window.location.pathname.startsWith(path)
    );

    if (!user && !isAllowedPath) {
      navigate("/login");
    }
    dispatch({ type: "USER", payload: user });
  }, [dispatch, navigate]);

  // ...

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="/event_form" element={<Event_Form />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contributor_form" element={<Contributor_Form />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/term" element={<Term />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/watchvideo/:code" element={<WatchVideo />} />
            <Route path="/youtube/:code" element={<Youtube_Lecture />} />
            <Route path="/support" element={<Support />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gate-placement" element={<Gate />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/roadmap_mern" element={<Roadmap_Mern />} />
            <Route path="/roadmap_frontend" element={<Roadmap_Frontend />} />
            <Route path="/roadmap_backend" element={<Roadmap_Backend />} />
            <Route path="/roadmap_devops" element={<Roadmap_Devops />} />
            <Route
              path="/roadmap_datascientist"
              element={<Roadmap_DataScientist />}
            />
            <Route
              path="/roadmap_mobiledeveloper"
              element={<Roadmap_MobileDeveloper />}
            />
            <Route path="/form" element={<Form />} />
            <Route path="/sem_1_1_units" element={<Sem_1_Fop_Units />} />
            <Route path="/sem_1_2_units" element={<Sem_1_Maths_Units />} />
            <Route path="/sem_1_3_units" element={<Sem_1_Eoc_Units />} />
            <Route path="/sem_1_4_units" element={<Sem_1_Eg_Units />} />
            <Route path="/sem_1_5_units" element={<Sem_1_Ep_Units />} />
            <Route path="/sem_1_6_units" element={<Sem_1_Es_Units />} />
            <Route path="/sem_2_1_units" element={<Sem_2_Oopc_Units />} />
            <Route path="/sem_2_2_units" element={<Sem_2_Maths_Units />} />
            <Route path="/sem_2_3_units" element={<Sem_2_Beee_Units />} />
            <Route path="/sem_2_4_units" element={<Sem_2_Fme_Units />} />
            <Route path="/sem_2_5_units" element={<Sem_2_Bcps_Units />} />
            <Route path="/sem_2_6_units" element={<Sem_2_Workshop_Units />} />
            <Route path="/sem_3_1_units" element={<Sem_3_Dsa_Units />} />
            <Route path="/sem_3_2_units" element={<Sem_3_Maths_Units />} />
            <Route path="/sem_3_3_units" element={<Sem_3_Dbms_Units />} />
            <Route path="/sem_3_4_units" element={<Sem_3_De_Units />} />
            <Route path="/sem_3_5_units" element={<Sem_3_Itw_Units />} />
            <Route path="/sem_4_1_units" element={<Sem_4_Oopj_Units />} />
            <Route path="/sem_4_2_units" element={<Sem_4_Psnm_Units />} />
            <Route path="/sem_4_3_units" element={<Sem_4_Os_Units />} />
            <Route path="/sem_4_4_units" element={<Sem_4_Coa_Units />} />
            <Route path="/sem_4_5_units" element={<Sem_4_Pom_Units />} />
            <Route path="/sem_5_1_units" element={<Sem_5_Ajp_Units />} />
            <Route path="/sem_5_2_units" element={<Sem_5_Daa_Units />} />
            <Route path="/sem_5_3_units" element={<Sem_5_Se_Units />} />
            <Route path="/sem_5_4_units" element={<Sem_5_Toc_Units />} />
            <Route path="/sem_5_5_units" element={<Sem_5_Cn_Units />} />
            <Route path="/sem_5_6_units" element={<Sem_5_Map_Units />} />
            <Route path="/sem_5_7_units" element={<Sem_5_Python_Units />} />
            <Route path="/sem_5_8_units" element={<Sem_5_SOA_Units />} />
            <Route path="/sem_6_7_units" element={<Sem_6_Sc_Units />} />
            <Route path="/sem_6_4_units" element={<Sem_6_Ml_Units />} />
            <Route path="/sem_6_9_units" element={<Sem_6_Dc_Units />} />
            <Route path="/sem_6_10_units" element={<Sem_6_Ee_Units />} />
            <Route path="/sem_6_2_units" element={<Sem_6_Py_Units />} />
            <Route path="/sem_6_1_units" element={<Sem_6_Ai_Units />} />
            <Route path="/sem_6_6_units" element={<Sem_6_Iot_Units />} />
            <Route path="/sem_6_3_units" element={<Sem_6_Cns_Units />} />
            <Route path="/sem_6_8_units" element={<Sem_6_Is_Units />} />
            <Route path="/sem_6_5_units" element={<Sem_6_Ap_Units />} />
            <Route path="/sem_7_4_units" element={<Sem_7_BT_Units />} />
            <Route path="/sem_7_1_units" element={<Sem_7_CD_Units />} />
            <Route path="/sem_7_3_units" element={<Sem_7_CS_Units />} />
            <Route path="/sem_7_2_units" element={<Sem_7_DS_Units />} />
            <Route path="/sem_7_6_units" element={<Sem_7_IP_Units />} />
            <Route path="/sem_7_7_units" element={<Sem_7_WDM_Units />} />
            <Route path="/sem_7_8_units" element={<Sem_7_CC_Units />} />
            <Route path="/sem_7_5_units" element={<Sem_7_NLP_Units />} />
            <Route path="/sem_8_2_units" element={<Sem_8_BDA_Units />} />
            <Route path="/sem_8_1_units" element={<Sem_8_NGN_Units />} />

            <Route path="/admin_pdf_form" element={<Admin_Pdf_Form />} />
            <Route path="/newhome" element={<NewHome />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routing />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{ zIndex: "9999999999" }} // Ensure the container has a high z-index
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "white",
              color: "black",
              fontSize: "16px",
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
