import React from "react";
import Input from "./Input";

export default function Form({ data, submit }) {
  return (
    <form action="" onSubmit={submit}>
      {data.map((input) => {
        return <Input data={input} />;
      })}
    </form>
  );
}
