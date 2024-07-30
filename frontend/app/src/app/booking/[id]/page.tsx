
import Link from "next/link"

async function getBookingById(id: number) {
  try{
    const response = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`)
    if(!response.ok){
      if(response.status === 404){
        console.error('Booking not found')
      }else{
        console.error('Error fetching booking', response.statusText)
      }
      return
    }
    const booking = await response.json()
    return booking;
  }catch(error){
    console.error('Error fetching booking', error)
  }
}

type P = {
  params:{
    id:string;
  }
}

const Home : React.FC = async ({ params }: P)   => {


     console.log('params', params.id)
     const bookingId = Number(params.id)
    const booking=await getBookingById(bookingId) 
    console.log('ardriti', booking)
    return (
      <>
      <div className="bg-slate-50 text-black border rounded-xl flex flex-col w-1/3 p-8 mx-auto my-20  space-y-6  shadow-xl">
           <h2 className='text-2xl font-semibold border-b-2'>Booking is with {booking.doctor_name}</h2>
           <p className='text-lg border-2 rounded-lg p-2 font-semibold italic bg-white'>Service: {booking.service}</p>

           <div className="flex justify-between  ">
           <p className='border bg-green-200 p-3 rounded-xl'>&#x1F551; Start time: {booking.start_time}</p>
           <p className='border bg-red-200 p-3 rounded-xl'>&#x1F551; End time: {booking.end_time}</p>
           </div>

           
             <Link href="/"
                className="border text-center bg-blue-400 hover:bg-blue-700 py-3 px-4 rounded-xl transition-all font-bold hover:text-white">
               Back
             </Link>
             </div>
           </>
    );
  };
  
  export default Home
