import { useDispatch, useSelector } from "react-redux";
import Homelayout from "../../Layouts/Homelayout"
import { Chart as ChartJS,ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,Title} from "chart.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GetStats } from "../../Redux/Slices/StatSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";


ChartJS.register(ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,Title);

function Dashboard() {
   const dispatch=useDispatch();
   const navigate=useNavigate();

  //  const {allUserCount,subscribedCount}=useSelector(state=>state?.stat)
   


    async function downloadData() {
      await dispatch(GetStats())
      await dispatch(getPaymentRecord())
   }

   useEffect(()=>{
       downloadData()
   },[])

 
  return (
    <Homelayout>
          

    </Homelayout>
  )
}

export default Dashboard