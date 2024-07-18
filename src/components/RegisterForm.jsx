// RegisterForm.jsx
import { useForm } from 'react-hook-form';
import './Rform.scss';

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container" id="registerForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Fill the Form</label>
        <input {...register("firstName", { required: 'max is length is 8 character', maxLength: 8 })} placeholder="firstname" />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}

        <input {...register("lastName", { required: 'max is length is 8 character', maxLength: 8 })} placeholder="lastname" />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        <input {...register("email", { required: 'Email is required', pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })} placeholder="example@example.com" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input {...register("password", {
          required: "Password required",
          minLength: { value: 8, message: "Password must be at least 8 characters" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            message: "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character"
          }
        })} placeholder="password" />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button className="submit-button" type="submit">submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
