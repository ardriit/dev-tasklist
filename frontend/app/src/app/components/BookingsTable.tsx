
import Link from "next/link";

type Booking = {
  id: string;
  doctor_name: string;
  date: string;
  start_time: string;
};

type BookingsTableProps = {
  bookings: Booking[];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const BookingsTable: React.FC<BookingsTableProps> = ({ bookings }) => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="flex items-center justify-between w-3/4 mb-5 text-black">
        <h1 className="font-bold">Number of bookings: {bookings.length}</h1>
        <Link href={'/new-booking'}
          className="border bg-blue-400 hover:bg-blue-700 py-3 px-4 rounded-xl transition-all font-bold hover:text-white">
            Create new booking
          
        </Link>
      </div>
      <table className="border bg-slate-100 text-black w-3/4 shadow-xl">
        <thead>
          <tr className="border">
            <th className="border">Description</th>
            <th className="border">Date</th>
            <th className="border">Start Time</th>
            <th className="border">Booking</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((item) => (
            <tr key={item.id} className="border text-center py-5">
              <td className="border py-5">You have a Booking with {item.doctor_name}</td>
              <td className="border">{formatDate(item.date)}</td>
              <td className="border">{item.start_time}</td>
              <td className="border">
                <Link href={`/booking/${item.id}`}
                  className="border bg-blue-300 hover:bg-blue-600 py-3 px-4 rounded-xl transition-all font-bold text-black hover:text-white">
                    View Booking
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;

// import Link from "next/link"
// import { useRouter } from "next/router";

// const formatDate = (dateString: string): string => {
//     const date = new Date(dateString);
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

// const BookingsTable =  ({bookings}) => {
//   return (
//   <div className="flex flex-col justify-center items-center  my-10">
          
//     <div className="flex items-center justify-between  w-3/4 mb-5 text-black">
//         <h1 className="font-bold">Number of bookings : {bookings.length}</h1>
//         <Link href={'/new-booking'}
//         className="border bg-blue-400 hover:bg-blue-700 py-3 px-4 rounded-xl transition-all font-bold hover:text-white"
//         >Create new booking</Link>
//     </div>
    
//     <table className="border bg-slate-100 text-black  w-3/4 shadow-xl ">
      
//       <thead>
//       <tr className="border">
//         <th className="border">Description</th>
//         <th className="border">Date</th>
//         <th className="border">Start Time</th>
//         <th className="border">Booking</th>
//       </tr>
//       </thead>

//       <tbody>
//       {bookings.map(item => <tr key={item.id} className="border text-center py-5">
//           <td className="border py-5">You have a Booking with  {item.doctor_name}</td>
//           <td className="border">{formatDate(item.date)}</td>
//           <td className="border">{item.start_time}</td>
//           <td className="border">
//             <Link href={`/booking/${item.id}`} className="border bg-blue-300 hover:bg-blue-600 py-3 px-4 rounded-xl transition-all font-bold text-black hover:text-white">
//               View Booking</Link>
//           </td>
//         </tr>)} 
//         </tbody> 
//       </table>
      
//   </div>
//   )
// }

// export default BookingsTable