// import { Component } from 'react';

// import itemsService from '../../../services/items-service';

// const validations = {
//     name: (value) => {
//         let message;
//         if (!value) {
//           message = 'Name is required';
//         }
//         return message;
//       },

//     description: (value) => {
//         let message;
//         if (!value) {
//           message = 'Ups! Description is required';
//         }
//         return message;
//       },
    
//     image: (value) => {
//         let message;
//         if (!value) {
//           message = 'Image is required';
//         }
//         return message;
//       },

//     cost: (value) => {
//         let message;
//         if (!value) {
//           message = 'Cost per day is required';
//         }
//         return message;
//       },
    
//     categories: (value) => {
//         let message;
//         if (!value) {
//           message = 'Choose at least 1 category';
//         }
//         return message;
//       },
    
//     location: (value) => {
//         let message;
//         if (!value) {
//           message = 'Ups! Add a valid location';
//         }
//         return message;
//       },    

// }

// class ItemForm extends Component {

//     initialState() {
//         return {
//           contact: {
//             name: '',
//             phone: '',
//             email: '',
//             avatar: faker.image.avatar()
//           },
//           errors: {
//             name: validations.name(''),
//             phone: validations.phone(''),
//             email: validations.email('')
//           },
//           touched: {
//             name: false,
//             phone: false,
//             email: false,
//             avatar: false
//           }
//         }
//       }


// }

// ItemForm.defaultProps = {
//     onCreateItem: () => {}
//   }
  
  
// export default ItemForm;