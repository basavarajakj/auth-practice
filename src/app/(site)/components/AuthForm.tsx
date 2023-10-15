'use client';

import { useState, useCallback } from "react";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import {
  FieldValues,
  useForm,
  SubmitHandler,
} from "react-hook-form";

import Input from "@/components/inputs/Input";
import Button from "@/components/Button";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');

  const togglerVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isLoading
    } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    console.log(data)
    if (variant === 'REGISTER') {
      //TODO: Axios register
    }

    if (variant === 'LOGIN') {
      //TODO: NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {

    //TODO: NextAuth Social signIn
  }

  return ( 
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        mx-4
        overflow-hidden
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          rounded-lg
          sm:px-10
        "
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
            id="name"
            label="Name"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" /> 
            </div>

            <div className="relative flex justify-center items-center">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton 
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton 
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>

          <div
            className="
              flex
              gap-2
              justify-center
              text-sm
              mt-6
              px-6
              text-gray-500
            "
          >
            <div>
              {variant === 'LOGIN' ? 'New to App?' : 'Already have an account?'}
            </div>
            <div
              onClick={togglerVariant}
              className="cursor-pointer underline"
            >
              {variant === 'LOGIN' ? 'Create an account' : 'Login'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthForm;