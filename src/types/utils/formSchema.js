import * as yup from "yup";
import dayjs from 'dayjs';
import { ErrorsMessages } from "../types/errors";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required(ErrorsMessages.required)
    .min(3, ErrorsMessages.minName)
    .max(15, ErrorsMessages.maxName)
    .test('no-empty-spaces', ErrorsMessages.noSpaces, (value) => {
      return value.trim() !== '';
    }),
  email: yup
    .string()
    .required(ErrorsMessages.required)
    .email(ErrorsMessages.email),
  birthDate: yup
    .date()
    .required(ErrorsMessages.required)
    .max(dayjs().subtract(18, 'years'), ErrorsMessages.bDateCheck),
  password: yup
    .string()
    .required(ErrorsMessages.required)
    .min(6, ErrorsMessages.minPass)
    .test('no-empty-spaces', ErrorsMessages.noSpaces, (value) => {
      return value.trim() !== '';
    }),
  confirmPassword: yup
    .string()
    .required(ErrorsMessages.required)
    .min(6, ErrorsMessages.minPass)
    .oneOf([yup.ref("password"), null], ErrorsMessages.confirmPassword),
});
