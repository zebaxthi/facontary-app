"use client";
import { FacontaryIcon } from "@/assets/FacontaryIcon";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    //prueba
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96">
        <CardHeader className="pb-6 pt-10 px-10 flex-col items-center">
          <FacontaryIcon className="w-20 h-20"></FacontaryIcon>
          <h1 className="mt-4 text-4xl">Facontary</h1>
        </CardHeader>
        <CardBody>
          <Chip className="mb-4">Si ya usas Facontary:</Chip>
          <Button
            color="success"
            className="mb-10"
            variant="shadow"
            onClick={() => {
              signIn();
            }}
          >
            Inicia sesión
          </Button>
          <Chip className="mb-4">Si es tu primera vez usando Facontary:</Chip>
          <Button
            color="default"
            variant="faded"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Crea una cuenta
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
