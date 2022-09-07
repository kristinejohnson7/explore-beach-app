import React from "react";

export default function Button({ submit, title }) {
  return <button onSubmit={submit}>{title}</button>;
}
