import * as yup from 'yup'

export const createUserSchema = yup.object().shape({
  userId: yup.string(),
  userName: yup.string().required('この値は必須です。'),
  userGroupId: yup.string().required('この値は必須です。'),
  userEmailAddress: yup.string().required('この値は必須です。'),
  userEmailAddressConfirm: yup.string().required('この値は必須です。'),
  userStartDate: yup.string().required('この値は必須です。'),
  userEndDate: yup.string().required('この値は必須です。'),
  userPassword: yup.string().required('この値は必須です。'),
  userPasswordConfirm: yup.string().required('この値は必須です。'),
  userNotificationStopFlg: yup.boolean(),
})

export const updateUserSchema = yup.object().shape({
  userId: yup.string(),
  userName: yup.string().required('この値は必須です。'),
  userGroupId: yup.string().required('この値は必須です。'),
  userEmailAddress: yup.string(),
  userEmailAddressConfirm: yup.string(),
  userStartDate: yup.string().required('この値は必須です。'),
  userEndDate: yup.string().required('この値は必須です。'),
  userPassword: yup.string(),
  userPasswordConfirm: yup.string(),
  userNotificationStopFlg: yup.boolean(),
})
