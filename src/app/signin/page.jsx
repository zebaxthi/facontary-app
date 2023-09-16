"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FacontaryIcon } from "@/assets/FacontaryIcon";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilledIcon";

const SignIn = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("zebaxthi08@gmail.com");
  const [password, setPassword] = useState("zeb123*");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/application");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96">
        <CardHeader className="pb-6 pt-10 px-10 flex-col items-center">
          <FacontaryIcon className="w-20 h-20"></FacontaryIcon>
          <h1 className="mt-4 text-2xl">Inicia sesión</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Input
              isRequired
              type="email"
              name="email"
              className="mb-2"
              value={email}
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              isRequired
              name="password"
              value={password}
              label="Contraseña"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="mb-2"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              color="success"
              variant="shadow"
              className="flex justify-center"
            >
              Inicia sesión
            </Button>
          </form>

          {errors.length > 0 && (
            <div className="alert alert-danger mt-2">
              <ul className="mb-0">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
export default SignIn;
