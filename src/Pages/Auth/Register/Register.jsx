import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    // const [showPassword, setShowPassword] = useState(false);


    const { register,showPassword, setShowPassword ,handleSubmit, formState: { errors }, } = useForm();

    const {registerUser} = useAuth();

    const handleRegistration = (data) => {
        console.log('after register', data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Please enter a valid email address",
                                },
                            })}
                            className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                className="input input-bordered w-full h-12 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-2">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between">

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>

                        <a
                            href="/forgot-password"
                            className="text-sm font-medium text-primary hover:underline"
                        >
                            Forgot Password?
                        </a>

                    </div>

                    {/* Login Button */}

                    <button
                        type="submit"
                        className="btn btn-primary w-full h-12 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                    >
                        Login
                    </button>

                </fieldset> 
            </form>
        </div>
    );
};

export default Register;