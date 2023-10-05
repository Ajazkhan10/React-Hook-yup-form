import { validateSchema } from "./Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const React_Hook_Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });
  const onHandleSubmit = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="max-w-[600px] mx-auto  mt-20 bg-gray-300">
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="flex flex-col gap-10 px-10 py-10 text-center items-center w-full"
      >
        <h2 className="text-blue-500 font-bold">Lets sign you in.</h2>
        <div className="w-full">
          <input
            placeholder="Email Addrees"
            type="email"
            {...register("email")}
            className="w-full px-2 py-3 outline-none hover:outline-blue-700 rounded-2xl"
          />
          <p className="text-red-600 font-semibold">{errors.email?.message}</p>
        </div>
        <div className="w-full">
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="w-full px-2 py-3 outline-none hover:outline-blue-700 rounded-2xl"
          />
          <p className="text-red-600 font-semibold">
            {errors.password?.message}
          </p>
        </div>
        <div className="w-full">
          <input
            placeholder="Conform password"
            type="password"
            {...register("confromPassword")}
            className="w-full px-2 py-3 outline-none hover:outline-blue-700 rounded-2xl"
          />
          <p className="text-red-600 font-semibold">
            {errors.confromPassword?.message}
          </p>
        </div>

        <button
          type="submit"
          className="w-fit bg-white px-5 py-2 text-blue-500 font-bold rounded-3xl hover:bg-slate-500 hover:text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default React_Hook_Form;
