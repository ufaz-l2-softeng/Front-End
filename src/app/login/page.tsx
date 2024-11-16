"use client";
import React, { useState } from "react";
import "../register/style.css";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const handleClick = () => {
    if (username === "" || password === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setUsername("");
      setPassword("");
      const userData = {
        username,
        password,
      };
      console.log(userData);
    }
  };
  return (
    <div className="w-[480px] h-[550px] mx-auto bg-gray-900 flex flex-col gap-5 pt-5 rounded-3xl">
      <div className="mx-auto w-fit">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <h2 className="text-center text-3xl">Log In</h2>
      <div className="flex flex-col gap-5">
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="max-w-xs mx-auto"
          type="text"
          label="Username"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="max-w-xs mx-auto"
          type="password"
          label="Password"
        />
        {isEmpty && (
          <p className="text-red-500 text-xl max-w-xs mx-auto">
            Please fill out all fields
          </p>
        )}
        <Button
          onClick={handleClick}
          fullWidth
          color="primary"
          className="max-w-xs mx-auto p-7 text-xl"
        >
          Log In
        </Button>
        <p className=" text-xl max-w-xs mx-auto">
          If you don&apos;t have an account{" "}
          <Link className="text-blue-600" href="/register">
            create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
