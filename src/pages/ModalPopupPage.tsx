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

const ModalPopupPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) =>
    console.log(JSON.stringify(data));

  
  return (
    <div className="modal-popup">
      <h2 className="modal-popup_h2" >Personal details</h2>
      <form className="modal-popup-form-registration" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="modal-popup-form-detail_name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="modal-popup-form-detail_number"
          placeholder="Phone number"
          {...register("phone_number", { required: true })}
        />
        <input
          className="modal-popup-form-detail_adress"
          placeholder="Delivery adress"
          {...register("delivery_adress", { required: true })}
        />
        <input
          className="modal-popup-form_email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />

        {/* {errors.exampleRequired && <span>This field is required</span>} */}
      </form>
      <h2 className="modal-popup_h2" >Credit card details</h2>
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

export default ModalPopupPage;
