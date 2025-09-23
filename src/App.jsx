import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"; // Assuming you have a Footer component
import ContactForm from "./components/home/ContactForm";
import FloatingContact from "./components/common/FloatingContact";
import ContactModal from "./components/common/ContactModal";
import routes from "./seo/routes";
import MetaTags from "./components/seo/MetaTags";

function RouteRenderer({ route }) {
  const params = useParams();
  const location = useLocation();

  const meta =
    typeof route.meta === "function"
      ? route.meta({ params, location })
      : route.meta;

  const Component = route.component;

  return (
    <>
      <MetaTags meta={meta} />
      <Component />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<RouteRenderer route={route} />}
            />
          ))}
        </Routes>
      </main>
      <ContactModal />
      <ContactForm />
      <FloatingContact />
      <Footer />
    </Router>
  );
}
