import React from "react";
import Comment from "./Comment";
import Header from "../Headers/Header";
import Form from "../Forms/Form";

export default function Comments({ comments, submit, data }) {
  return (
    <div className="commentContainer">
      <Header variant="small" />
      {comments.map((comment) => (
        <Comment content={comment} />
      ))}
      <Form submit={submit} data={data} />
    </div>
  );
}
