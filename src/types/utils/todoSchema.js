import * as yup from "yup";
import { ErrorsMessages } from "../types/errors";

export const todoSchema = yup.object().shape({
  title: yup
    .string()
    .required(ErrorsMessages.required)
    .min(3, ErrorsMessages.titleMin)
    .test('no-empty-spaces', ErrorsMessages.noSpaces, (value) => {
      return value.trim() !== '';
    }),
  body: yup
    .string()
    .required(ErrorsMessages.required)
    .test('no-empty-spaces', ErrorsMessages.noSpaces, (value) => {
      return value.trim() !== '';
    }),
});
