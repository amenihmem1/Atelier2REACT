import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const NavigationBar = React.lazy(() => import("./components/Navbar"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventDetails/:eventName" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
