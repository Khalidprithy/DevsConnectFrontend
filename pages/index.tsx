import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type AppUser = {
  firstName: string;
  lastName: string;
  address: string;
  username: string;
  email: string;
  password: string;
}
const AddUserSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  username: yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});
export default function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm<AppUser>({
    resolver: yupResolver(AddUserSchema)
  });
  const onSubmit = (data: AppUser) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className="bg-blue-100 w-full h-screen flex items-center justify-center">
      <div className="w-11/12 md:w-4/12 xl:w-3/12  bg-teal-200 p-5 rounded-2xl">
        <div>
          <h1 className="text-4xl font-semibold text-center"> Welcome to <br /> <span className="text-info">DevsConnect</span> </h1>
          <h4 className="text-xl font-semibold text-center p-4">Sign Up</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">User Name</label>
            <input className="h-10 p-2 rounded-lg" {...register("username")} />
            {errors.username && <p className="text-error">{errors.username.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">First Name</label>
            <input className="h-10 p-2 rounded-lg" {...register("firstName")} />
            {errors.firstName && <p className="text-error">{errors.firstName.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">Last Name</label>
            <input className="h-10 p-2 rounded-lg" {...register("lastName")} />
            {errors.lastName && <p className="text-error">{errors.lastName.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">Email</label>
            <input className="h-10 p-2 rounded-lg" {...register("email")} />
            {errors.email && <p className="text-error">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">Password</label>
            <input className="h-10 p-2 rounded-lg" {...register("email")} />
            {errors.password && <p className="text-error">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold mt-2">Confirm Password</label>
            <input className="h-10 p-2 rounded-lg" {...register("password")} />
            {errors.password && <p className="text-error">{errors.password.message}</p>}
          </div>
          <input className="btn btn-info w-full mt-6" type="submit" />
        </form>
      </div>
    </div>
  );
}