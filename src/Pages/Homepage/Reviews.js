import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import useReview from "../../hooks/useReview";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [reviews, setReviews] = useReview([]);

  if (!reviews) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-12 my-12">
      <h2 className="text-accent uppercase font-bold text-4xl my-5 mx-auto w-[fit-content]">
        Client Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <div className="text-center" key={review._id}>
            <div className="text-center m-3 p-3 ">
              <div className="avatar mr-3">
                <div className="w-10 rounded-full ring ring-red ring-offset-base-100 ring-offset-2">
                  {review.img ? (
                    <>
                      <img src={review.img} alt="" />
                    </>
                  ) : (
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <p className="text-blue-800 font-bold text-lg cursor-pointer">
                {review?.Name}
              </p>
            </div>
            <p>{review?.message.slice(0, 40)}...</p>
            <p className="text-yellow-600">Rating: {review?.rating}</p>
          </div>
        ))}
      </div>
        <Link to='/all-review'> <button className="btn btn-sm btn-accent text-amber-50 my-6"> see all reviews</button></Link>
    </div>
  );
};

export default Reviews;
