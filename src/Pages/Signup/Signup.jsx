import {
  useAuthState,
  useUpdateProfile,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  // Redirecting based on user authentication status
  if (user) {
    navigate(-1);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data.Email, "Email");
    console.log(data.Password, "Password");
    await createUserWithEmailAndPassword(data.Email, data.Password);
    await updateProfile({ displayName: data.Username });
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        {...register("Username", { required: true })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true })}
      />
      <input
        type="text"
        placeholder="Password"
        {...register("Password", { required: true })}
      />
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("Confirm Password", {})}
      />

      <input type="submit" />
    </form>
  );
};

export default Signup;
