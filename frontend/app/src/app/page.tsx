import Link from 'next/link';
import BookingsTable from './components/BookingsTable';


async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home: React.FC = async () => {
  
 
  

  const bookings = await getBookings()
  
  return (
  
    <BookingsTable bookings={bookings} />
  );
};

export default Home;
