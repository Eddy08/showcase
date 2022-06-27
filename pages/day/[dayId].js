import { useRouter } from "next/router";
function DayDetails(){
    const router=useRouter()
    const {dayId}= router.query
    return(<h1>{dayId}</h1>)
}
export default DayDetails;