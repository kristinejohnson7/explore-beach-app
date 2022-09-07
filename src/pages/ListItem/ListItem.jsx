import React, { useContext } from "react";
import listingContext from "../../context/listings";
import Image from "../../components/Image/Image";
import Header from "../../components/Headers/Header";
import Description from "../../components/Description/Description";
import Rating from "../../components/Rating/Rating";
import Button from "../../components/Button/Button";
import Comment from "../../components/Comment/Comment";
import Form from "../../components/Forms/Form";

export default function ListItem() {
  const { singleListing } = useContext(listingContext);

  const { images, title, description, rating, comments } = singleListing;

  const submitComment = () => {
    //createCommentForListing in listing context is called
  };

  const handleAddRating = () => {
    //sets state for conditional UI that allows user to hover over "stars" and click their rating
    //upon click form is submitted and createCommentForListing from listing context is called
  };

  const commentFormData = {
    type: "text",
    placeholder: "Write a comment",
    name: "comment",
  };

  return (
    <section id="listItem">
      <div>
        {images.map((image) => (
          <Image />
        ))}
      </div>
      <div>
        <div>
          <Header title={title} />
          <Description content={description} />
        </div>
        <div>
          <Rating rating={rating} />
          <Button variant="outlined" submit={handleAddRating} />
        </div>
      </div>
      <div className="commentContainer">
        <Header variant="small" />
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
        <Form submit={submitComment} data={commentFormData} />
      </div>
    </section>
  );
}
