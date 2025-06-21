import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ClockIcon } from 'lucide-react';
import isoTimeFormat from '../libs/isoTimeFormat';

const SeatLayout = () => {
  const {id,date} = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const getShow = async()=>{
    const show = dummyShowsData.find(show => show._id === id);
    if(show){
      setShow({
        movie:show,
        dateTime : dummyDateTimeData
      });
    }
  };
  useEffect(()=>{
    getShow();
  },[])
  return show ?(
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-36 py-30 md:py-50'>
      {/* available timings  */}
      <div className='w-60 h-max md:sticky bg-primary/20 border-primary/20 border rounded-lg py-10 '>
        <p className='text-lg font-semibold px-6'>Available Timings</p>
        <div className='mt-5 space-y-1'>
          {show?.dateTime[date]?.map((time,index)=>
          <div onClick={()=>setSelectedTime(time)} key={index+1} className={`flex items-center gap-2 px-6 py-2 w-max cursor-pointer transition rounded-r-md ${selectedTime?.time === time?.time ? 'bg-primary text-white' : 'hover:bg-primary/20'}`}>
            <ClockIcon className='w-4 h-4'/>
            <p className='text-sm'>{isoTimeFormat(time?.time)}</p>
          </div>)}
        </div>
      </div>
      {/* seat layout */}
      <div></div>
    </div>
  ):<Loading/>
}

export default SeatLayout