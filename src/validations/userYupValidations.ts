import * as yup from 'yup'

export const userYupValidations = yup.object().shape({
  firstName: yup.string().min(3).required("Primeiro nome necessário"),
  lastName: yup.string().min(3).required("Último nome necessário"),
  email: yup.string().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/).required("Email necessário"),
  password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required("Senha necessária")
})