import { useForm } from 'react-hook-form';

import itemsService from '../../../services/items-service';

// import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';

// ON SELECT: https://www.npmjs.com/package//react-places-autocomplete


function ItemForm({ onCreateItem }) {

  const { register, handleSubmit, setError, setValue, watch, reset, formState: 
    { errors, isValid, isDirty } } = useForm({
    mode: 'all'});


  const onCreateItemFormSubmit = item => {
    itemsService.create(item)
      .then(item => {
        onCreateItem(item)
        reset();
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
  };


  return (
    <div className="row mb-3">
      <div className="mt-5 d-flex justify-content-center">
        <form onSubmit={handleSubmit(onCreateItemFormSubmit)}>

          <div className="input-group mb-3">
            <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
            <input type="text" {...register("name", { required: 'Item name is required' })} 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Item name.."  />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text"><i className="fas fa-arrow-alt-circle-right" /></span>
            <input type="text" {...register("description", { required: 'Description is required' })} 
              className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Describe your item" />
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
            </div>
            <input type="text" {...register("cost", { required: 'Cost per day is required' })}
              className={`form-control ${errors.cost ? 'is-invalid' : ''}`} placeholder="Cost per day" />
            {errors.cost && <div className="invalid-feedback">{errors.cost.message}</div>}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
            <input type="file" {...register("image", { required: 'Image is required' })}
              className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="Add an image" />
            {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
          </div>


          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">Options</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose at least 1 category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <input type="text" {...register("categories", { required: 'At least 1 Category is required' })}
              className={`form-control ${errors.categories ? 'is-invalid' : ''}`} placeholder="Categories" />
            {errors.categories && <div className="invalid-feedback">{errors.categories.message}</div>}
          </div>


          <div className="row justify-content-center">
            <div className="col-12 col-sm-4">
              <button className="mt-3 p-3 badge bg-dark text-white rounded-pill" disabled={!isDirty || !isValid}>Submit your Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

ItemForm.defaultProps = {
  onCreateItem: () => {}
}


export default ItemForm;