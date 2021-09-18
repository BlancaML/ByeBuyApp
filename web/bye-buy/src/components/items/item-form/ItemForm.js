import { useForm } from 'react-hook-form';
import itemsService from '../../../services/items-service';




function ItemForm({ onCreateItem }) {
  

  const { register, handleSubmit, setError, reset, formState: 
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
        <div className="input-group mb-3 justify-content-center">
            <h2 className="">List your Item...</h2>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">👁‍🗨</span>
            <input type="text" {...register("name", { required: 'Item name is required' })} 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Item name.."  />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">📝</span>
            <input type="text" {...register("description", { required: 'Description is required' })} 
              className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Describe your item" />
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">€</span>
            </div>
            <input type="text" {...register("cost", { required: 'Cost per day is required' })}
              className={`form-control ${errors.cost ? 'is-invalid' : ''}`} placeholder="Cost per day" />
            {errors.cost && <div className="invalid-feedback">{errors.cost.message}</div>}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">📷</span>
            <input type="file" {...register("image", { required: 'Image is required' })}
              className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="Add an image" />
            {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}
          </div>


          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">🔎</span>
            <select
              {...register("categories", { required: 'At least 1 Category is required' })}
              className={`form-select form-select-sm ${errors.categories ? 'is-invalid' : ''}`} 
              placeholder="Categories" multiple>
                <option >Choose at least 1 category...</option>
                <option value="audio-visual-equipment">Audiovisual Equipment</option>
                <option value="clothing">Clothing</option>
                <option value="dj-equipment">DJ Equipment</option>
                <option value="drones">Drones</option>
                <option value="electronics">Electronics</option>
                <option value="film-photography">Film and photography</option>
                <option value="holiday-travel">Holyday and Travel</option>
                <option value="home-office-garden">Home and Garden</option>
                <option value="kids-baby">Kids</option>
                <option value="musical-instruments">Musical Instruments</option>
                <option value="projectors-screens">Projectors and Screens</option>
                <option value="party-events">Party and Events</option>
                <option value="sports">Sports</option>
                <option value="storage">Storage</option>
                <option value="transport">Transport</option>
            </select>
          </div>


          <div className="row justify-content-center">
            <div className="col-12 col-sm-6">
              <button className="mt-3 p-3 bg-dark text-white rounded-pill" disabled={!isDirty || !isValid}><b>Submit your item</b></button>
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