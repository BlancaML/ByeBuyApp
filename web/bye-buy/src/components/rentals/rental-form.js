import rentalsService from '../../services/rentals-service';
import { useForm } from 'react-hook-form';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;


function RentalForm({ onCreateRental }) {

  const { register, handleSubmit, setError, 
    formState: { errors, isValid, isDirty}} = useForm({ mode: 'all'});

  
  const onCreateRentalFormSubmit = rental => {
    rentalsService.create(rental)
      .then(rental => {
        onCreateRental(rental)
        
      })
      .catch(error => {
        const { message, errors } = error.response?.data || error;
        if (errors) {
          Object.keys(errors).forEach(input => {
            setError(input, { type: 'manual', message: errors[input] });
          })
        } else {
          setError('name', { type: 'manual', message: message });
        }
      })

  }

  

    return (
      <div className="container">
        <div className="mt-5 d-flex justify-content-center">
          <form onSubmit={handleSubmit(onCreateRentalFormSubmit)}>
            <RangePicker showTime/>
            <div className="input-group mb-3">
              <span className="input-group-text">👁‍🗨</span>
              <input type="date" {...register("startDate", { required: 'Start Date is required' })} 
                className={`form-control ${errors.startDate? 'is-invalid' : ''}`} placeholder="start date.."  />
              {errors.startDate && <div className="invalid-feedback">{errors.startDate.message}</div>}
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">👁‍🗨</span>
              <input type="date" {...register("endDate", { required: 'End Date is required' })} 
                className={`form-control ${errors.endDate ? 'is-invalid' : ''}`} placeholder="End Date.."  />
              {errors.endDate && <div className="invalid-feedback">{errors.endDate.message}</div>}
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6">
                <button className="mt-3 p-3 bg-dark text-white rounded-pill" disabled={!isDirty || !isValid}><b>Send your request</b></button>
              </div>
            </div>
          </form>
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