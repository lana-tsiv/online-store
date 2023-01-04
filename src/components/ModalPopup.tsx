import { useForm, SubmitHandler } from "react-hook-form";
import { useCreditCardValidator, images } from "react-creditcard-validator";

import "./../styles/Popup.css";
import "./../styles/colors.css";

type Inputs = {
  name: string;
  phone_number: number;
  delivery_address: string;
  email: string;
  NumberСard: number;
};

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) =>
    console.log(JSON.stringify(data));

  const expDateValidate = (month: string, year: string) => {
    if (Number(year) > 2035) {
      return "Expiry Date Year cannot be greater than 2035";
    }
    return;
  };

  const cvcValidate = (cvc: string) => {
    if (!/^[0-9]{3}$/.test(cvc)) {
      return "Wrong CVC";
    }
    return;
  };

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator({
    expiryDateValidator: expDateValidate,
    cvcValidator: cvcValidate,
  });

  return (
    <div className="modal-popup">
      <div className="modal-popup__personal-details">
        <h2 className="modal-popup__title">Personal details</h2>
        <form
          className="modal-popup-form-registration"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input modal-popup-form-detail_name"
            placeholder="Name Surname"
            {...register("name", {
              required: true,
              pattern: /\d*(?:[a-zA-Z]){3,}\d* d*(?:[a-zA-Z]){3,}\d*/,
            })}
          />
          <div className="input-error-data">
            {errors?.name && <p>Wrong Name!</p>}
          </div>
          <input
            className="input modal-popup-form-detail_number"
            placeholder="Phone number"
            {...register("phone_number", {
              required: true,
              pattern: /\+\d{9}/,
            })}
          />
          <div className="input-error-data" style={{}}>
            {errors?.phone_number && <p>Wrong phone number!</p>}
          </div>
          <input
            className="input modal-popup-form-detail_address"
            placeholder="Delivery address"
            {...register("delivery_address", {
              required: true,
              pattern:
                /\d*(?:[a-zA-Z-0-9]){5,}\d* d*(?:[a-zA-Z-0-9]){5,}\d* d*(?:[a-zA-Z-0-9]){5,}\d*/,
            })}
          />
          <div className="input-error-data" style={{}}>
            {errors?.delivery_address && <p>Wrong address!</p>}
          </div>
          <input
            className="input modal-popup-form_email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              pattern:
                // eslint-disable-next-line no-control-regex
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            })}
          />
          <div className="input-error-data" style={{}}>
            {errors?.email && <p>Wrong Email!</p>}
          </div>

          <div className="modal-popup__card-details">
            <h2 className="modal-popup__title">Credit card details</h2>
            <div className="modal-popup-card_wrapper">
              <input
                className="input modal-popup_card-details-cardNumber"
                {...getCardNumberProps()}
              />
              <small>
                {erroredInputs.cardNumber && erroredInputs.cardNumber}
              </small>

              <input
                className="input modal-popup_card-details-cardDate"
                {...getExpiryDateProps()}
              />
              <small>
                {erroredInputs.expiryDate && erroredInputs.expiryDate}
              </small>

              <input
                className="input modal-popup_card-details-cardCVC"
                {...getCVCProps({})}
              />
              <small>{erroredInputs.cvc && erroredInputs.cvc}</small>

              <svg className="modal-popup-card_wrapper_svg" {...getCardImageProps({ images })} />
            </div>
          </div>
          <input className="input-submit modal-popup_input" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
