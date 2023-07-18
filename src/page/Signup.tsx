import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { createUser } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = () => {
  interface SignUpFormInputs {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: SignUpFormInputs) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <div className="hero mt-10 mb-[100px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-[50%]">
          <h1 className="text-5xl font-bold">SignUp Now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 lg:w-[50%] shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    className="input input-bordered mb-3"
                    id="name"
                    placeholder="enter your name address"
                    type="name"
                    autoCapitalize="none"
                    autoComplete="name"
                    autoCorrect="off"
                    {...register("name", { required: "Full Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-error">{errors.name.message}</p>
                  )}

                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    className="input input-bordered mb-3"
                    id="email"
                    placeholder="enter your email address"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-error">{errors.email.message}</p>
                  )}

                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    className="input input-bordered mb-2"
                    id="password"
                    placeholder="your password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-error">{errors.password.message}</p>
                  )}
                </div>
                <button className="btn btn-primary">Login with email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
