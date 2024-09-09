/* All form validations will resides here */

import * as yup from 'yup';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

export const mobileSignInFormValidation = yup.object().shape({
  email: yup.string().required('User is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must contain at least 8 characters')
});

// export const OTPFormValidation = Yup.object({
//   otp: Yup.string()
//     .required('Otp is required')
//     .max(6, 'Otp must be at least 6 characters')
//     .min(6, 'Otp must be at more 6 characters')
// });
