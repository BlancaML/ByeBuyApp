import rentalsService from '../../services/rentals-service';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
// import Moment from 'moment';

const { RangePicker } = DatePicker;


function RentalForm({ onCreateRental }) {

  const { id } = useParams()

  const [dates, setDates] = useState({ startDate: null, endDate: null});

  const [showMessage, setShowMessage] = useState(false)
 
  
  const onClickCreateRental = () => {

    const { startDate, endDate} = dates;
    if (startDate && endDate) {
      rentalsService.create(id, dates)
      .then(rental => {
        onCreateRental(rental)
        
      })
      .catch(error => {
        const { message, errors } = error.response?.data || error;
        if (errors) {
         console.log(error)
        } else {
          console.log(message)
        }
      })
    }
  }

    return (
           <div className="container">
             {!showMessage && 
             <div className="input-group mt-3 justify-content-center">
             <RangePicker
               onChange={([startDate, endDate]) => setDates({startDate: startDate, endDate: endDate})}
             />
               <div className="input-group mb-3 justify-content-center">
                 <div className="p-3">
                   <button className="mt-3 p-3 rounded-pill"
                   onClick={() =>{
                  onClickCreateRental();
                  setShowMessage(true)}}
                   disabled={!dates.startDate || !dates.endDate}><b>Send your request</b></button>
                 </div>
               </div>
           </div>

             }
           

            <div className="d-flex justify-content-center">
                    {showMessage && 
                    <div className="row mb-2 d-flex justify-content-center">
                    <h6 className="text-white lh-base">Congrats! The owner will contact you soon to agree the details of the rental!</h6>
                    <br></br>
                    <Link to='/items' className="text-white lh-lg">🤩...more items to rent?</Link>
                    </div>
                    }   
              </div>
          </div> 
        )
    }


RentalForm.defaultProps = {
  onCreateRental: () => {}
}

export default RentalForm;



// function Calendar() {
//   const [dates, setDates] = useState([]);
//   const [hackValue, setHackValue] = useState();
//   const [value, setValue] = useState();

//   const disabledDate = current => {
//     if (!dates || dates.length === 0) {
//       return false;
//     }
//     const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
//     const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
//     return tooEarly || tooLate;
//   };

//   const onOpenChange = open => {
//     if (open) {
//       setHackValue([]);
//       setDates([]);
//     } else {
//       setHackValue(undefined);
//     }
//   };

//   return (
    
//     <RangePicker
//       value={hackValue || value}
//       disabledDate={disabledDate}
//       onCalendarChange={val => setDates(val)}
//       onChange={val => setValue(val)}
//       onOpenChange={onOpenChange}
   
//     />
//   );
// };

// ReactDOM.render(<Calendar />, mountNode);


