"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClick = () => {
    if (username === "" || password === "" || confirmPassword === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      if (password === confirmPassword) {
        setIsInvalid(false);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        const userDatas = {
          username,
          password,
        };
        console.log(userDatas);
      } else {
        setIsInvalid(true);
      }
    }
  };
  return (
    <div className="w-[480px] h-[650px] mx-auto bg-gray-900 flex flex-col gap-5 pt-5 rounded-3xl">
      <div className="mx-auto w-fit">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <h2 className="text-center text-3xl">Sign Up</h2>
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
          isInvalid={isInvalid}
          errorMessage="Passwords do not match"
          label="Password"
        />
        <Input
          value={confirmPassword}
          isInvalid={isInvalid}
          errorMessage="Passwords do not match"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="max-w-xs mx-auto"
          type="password"
          label="Confirm Password"
        />
      </div>
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
        Create Account
      </Button>
      <p className=" text-xl max-w-xs mx-auto">
        If you already have an account, please{" "}
        <Link className="text-blue-600" href="/login">
          log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
