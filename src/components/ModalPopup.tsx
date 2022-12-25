import { useForm, SubmitHandler } from "react-hook-form";

import "./../styles/Popup.css";
import "./../styles/colors.css";

type Inputs = {
  name: string;
  phone_number: number;
  delivery_adress: string;
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

  return (
    <div className="modal-popup">
      <h2 className="modal-popup_h2">Personal details</h2>
      <form
        className="modal-popup-form-registration"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="modal-popup-form-detail_name"
          placeholder="Name"
          {...register("name", {
            required: true,
            pattern: /\d*(?:[a-zA-Z]){3,}\d* d*(?:[a-zA-Z]){3,}\d*/,
          })}
        />
        <div style={{ height: 40 }}>{errors?.name && <p>Wrong Name !</p>}</div>
        <input
          className="modal-popup-form-detail_number"
          placeholder="Phone number"
          {...register("phone_number", {
            required: true,
            pattern: /\+\d{9}/,
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.phone_number && <p>Wrong phone number !</p>}
        </div>
        <input
          className="modal-popup-form-detail_adress"
          placeholder="Delivery adress"
          {...register("delivery_adress", {
            required: true,
            pattern:
              /\d*(?:[a-zA-Z-0-9]){5,}\d* d*(?:[a-zA-Z-0-9]){5,}\d* d*(?:[a-zA-Z-0-9]){5,}\d*/,
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.delivery_adress && <p>Wrong address !</p>}
        </div>
        <input
          className="modal-popup-form_email"
          placeholder="E-mail"
          {...register("email", {
            required: true,
            pattern:
              // eslint-disable-next-line no-control-regex
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.email && <p>Wrong Email !</p>}
        </div>
        <input className="modal-popup_input" type="submit" />
      </form>
      <h2 className="modal-popup_h2">Credit card details</h2>
      <form className="modal-popup-card">
        <div className="modal-popup-card_wrapper">
          {/* <input
          className="modal-popup-card_wrapper"
          placeholder="Number of card"
          {...register("NumberСard", { required: true })}
        /> */}
        </div>
      </form>
      <input className="modal-popup_input" type="submit" />
    </div>
  );
};

export default Modal;
