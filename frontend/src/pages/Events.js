import { Link } from 'react-router-dom';

const EVENT_LIST = [{
    id: 'r1',
    title: 'event Moto'
  },
  {
    id: 'r2',
    title: 'event Car'
  },
  {
    id: 'r3',
    title: 'event Ship'
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENT_LIST.map((event) => <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
        )}
      </ul>
    </>
    
  )
}