
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader} from './pages/Events';
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import {action as addEventAction} from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events', 
        element: <EventsRootLayout />, 
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true, 
                element: <EventDetailPage />, 
                action: deleteEventAction
              },
              {path: 'edit', element: <EditEventPage />, action: addEventAction}
            ]
          },
          {path: 'new', element: <NewEventPage />, action: addEventAction},
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
