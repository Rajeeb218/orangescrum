import React from "react";
import { customerReviews } from "../Data/CustomerReviews";
import { Star1 } from "iconsax-react";

const CustomerSuccess = () => {
  return (
    <>
      <section className="relative bg-white py-50 compare_saas_selfhost">
        <div className="container text-center">
          <div className="mb-30">
            <h2 className="text-5xl mb-10 pt-20 font-semibold relative text-white z-0">
              Top Rated <span className="mt-10">Customer Success Platform</span>
            </h2>
          </div>
          <article className="flex flex-row">
            {customerReviews.map((company, index) => (
              <aside key={index} className="w-1/2 px-6">
                <div className="min-h-628 z-9999 relative  p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out rate_sucess_card">
                  <figure className="flex justify-center">
                    <img
                      src={company.imageSrc}
                      alt={company.company}
                      width={100}
                      height={100}
                    />
                  </figure>
                  <div className="flex my-3 justify-center items-center">
                  <Star1 size="32" color="#f0ad4e" variant="Bold"/>
                  <Star1 size="32" color="#f0ad4e" variant="Bold"/>
                  <Star1 size="32" color="#f0ad4e" variant="Bold"/>
                  <Star1 size="32" color="#f0ad4e" variant="Bold"/>
                  </div>
                  <ul>
                    {company.reviews.map((review, reviewIndex) => (
                      <li key={reviewIndex} className="block my-4 text-base leading-6 text-blue-900 font-normal text-left">
                        <div className="w-1/3 h-6 bg-no-repeat" />"{review.text}"
                        <div className="flex justify-between items-center my-2">
                          <small>
                            <strong>{review.author}</strong> - {review.category}
                          </small>
                          <small>Ratings - {review.rating}/5</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            ))}
          </article>
          <article className="flex flex-row text-center mb-60"></article>
        </div>
      </section>
    </>
  );
};

export default CustomerSuccess;
