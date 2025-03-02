import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom"; // Pas besoin d'importer BrowserRouter ici

const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const NavigationBar = React.lazy(() => import("./components/Navbar"));
const AddEvent = React.lazy(() => import('./components/AddEvent'));
const UpdateEvent = React.lazy(() => import('./components/UpdateEvent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventDetails/:eventName" element={<EventDetails />} />
        <Route path="/events/add" element={<AddEvent />} />
        <Route path="/events/update" element={<UpdateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
