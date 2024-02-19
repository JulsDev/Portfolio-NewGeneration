import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Common/Button";
import "./FormControl.scss";

interface IFormData {
  userName: string;
  userEmail: string;
  userMessage: string;
}

export default function FormControl() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    alert(
      `Name: ${data.userName}, Email: ${data.userEmail} Message: ${data.userMessage}`
    );
  };

  return (
    <section className="section-contacts" id="contact">
      <h2 className="title title__contacts">Contacts with me</h2>
      <div className="form-wrapper">
        <form
          noValidate
          className="form-container"
          id="data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form__row">
            <div className="form__block form__block--name">
              <label htmlFor="form-input__name" className="form__label">
                Enter your name
              </label>
              <input
                id="form-input__name"
                className="form__input form__block-input"
                type="text"
                placeholder="John Doe"
                {...register("userName", {
                  required: 'This field is required',
                  pattern: {
                    value: /[A-Za-z]/,
                    message: "invalid name",
                  },
                  minLength: { value: 3, message: "too short name" },
                  maxLength: { value: 10, message: "too long name" },
                })}
              />
              {errors.userName && (
                <div className="form-input__error">
                  {errors.userName && errors.userName.message}
                </div>
              )}
            </div>
            <div className="form__block form__block--email">
              <label htmlFor="form-input__email" className="form__label">
                Enter your email
              </label>
              <input
                id="form-input__email"
                className="form__input form__block-input"
                type="email"
                placeholder="john.doe@gmail.com"
                {...register("userEmail", {
                  required: 'This field is required',
                  pattern: {
                    value:
                      /((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})/,
                    message: "invalid E-mail",
                  },
                })}
              />
              {errors.userEmail && (
                <div className="form-input__error">
                  {errors.userEmail && errors.userEmail.message}
                </div>
              )}
            </div>
          </div>
          <div className="form__row">
            <div className="form__block form__block--email">
              <label htmlFor="form-input__msg" className="form__label">Message to letter</label>
              <textarea
                className="form__input form__textarea"
                id="form-input__msg"
                rows={2}
                {...register("userMessage", {
                  required: 'This field is required',
                  maxLength: { value: 250, message: "too long message" },
                })}
              />
              {errors.userMessage && (
                <div className="form-input__error">
                  {errors.userMessage && errors.userMessage.message}
                </div>
              )}
            </div>
          </div>
          <Button
            id="form-submit__button"
            className="form-submit__button"
            type="submit"
            text="SEND"
          />
        </form>
      </div>
    </section>
  );
}