import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { formSchema } from "../utils/formSchema";
import { Modal } from "./Modal";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const selectedDate = watch("birthDate", "");

  const onSubmit = (data) => {
    setIsModalOpen(true);
    setUsername(data.name);
    reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form
        className="box form mt-6 has-background-link-light"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="field">
          <label className="label" htmlFor="name">
            Name
            <input
              className="input has-background-info-light mt-1"
              type="text"
              id="name"
              {...register("name")}
            />
          </label>
          <p className="help has-text-danger">{errors.name?.message}</p>
        </div>
        <div className="field">
          <label className="label">
            E-mail
            <input
              className="input has-background-info-light mt-1"
              {...register("email")}
            />
          </label>
          <p className="help has-text-danger">{errors.email?.message}</p>
        </div>

        <div className="field">
          <label className="label is-flex is-flex-direction-column">
            Birth date
            <Controller
              name="birthDate"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <DatePicker
                  className="input has-background-info-light mt-1"
                  placeholderText="Click to select a date"
                  {...field}
                  selected={selectedDate}
                  onChange={(date) => {
                    setValue("birthDate", date, { shouldValidate: true });
                  }}
                  calendarStartDay={1}
                  dateFormat="dd.MM.yyyy"
                  maxDate={new Date()}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              )}
            />
          </label>
          <p className="help has-text-danger">{errors.birthDate?.message}</p>
        </div>

        <div className="field">
          <label className="label">
            Password
            <input
              className="input has-background-info-light mt-1"
              {...register("password")}
              type="password"
            />
          </label>
          <p className="help has-text-danger">{errors.password?.message}</p>
        </div>
        <div className="field">
          <label className="label">
            Confirm password
            <input
              className="input has-background-info-light mt-1"
              {...register("confirmPassword")}
              type="password"
            />
          </label>
          <p className="help has-text-danger">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="buttons mt-6">
          <button
            type="submit"
            className="button is-link"
            disabled={errors.birthDate || !selectedDate}
          >
            Send
          </button>
          <button
            className="button is-danger"
            onClick={(event) => {
              event.preventDefault();
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </form>
      {isModalOpen && <Modal userName={userName} closeModal={closeModal} />}
    </>
  );
}

export default Form;
