import React from "react";

const reviews = [
  {
    link: "https://reviews.capterra.com/new/136500",
    imgSrc: "https://www.orangescrum.com/img/webp/optimize/capterra.webp",
    alt: "Capterra",
    text: "Write a review on Capterra",
  },
  {
    link: "https://www.g2.com/products/orangescrum/reviews/start?return_to=https%3A%2F%2Fwww.g2.com%2Fproducts%2Forangescrum%2Ftake_survey",
    imgSrc: "https://www.orangescrum.com/img/home_outer/g2-logo.webp",
    alt: "G2 crowd",
    text: "Write a review on G2",
  },
  {
    link: "https://reviews.getapp.com/new/100583",
    imgSrc: "https://www.orangescrum.com/img/webp/optimize/get-app.webp",
    alt: "GetApp",
    text: "Write a review on GetApp",
  },
];

const CustomerAnalytics = () => {
  return (
    <>
      <section className="cutomer_analytics container">
        <div className="px-56 pt-10">
          <a
            href="https://www.g2.com/products/orangescrum/reviews"
            rel="nofollow"
            target="_blank"
            className
          >
            <img
              src="https://www.orangescrum.com/img/home_outer/g2-batches-2.webp"
              alt="social proofing reviews"
              width={897}
              height={140}
              className="lazy"
            />
          </a>
        </div>
        <div className="flex justify-around px-20 items-center my-10">
          {reviews.map((review, index) => (
            <aside className="width-33-per" key={index}>
              <a
                href={review.link}
                rel="nofollow"
                target="_blank"
                className="review_app"
              >
                <img
                  src={review.imgSrc}
                  alt={review.alt}
                  width={200}
                  height={90}
                  className="lazy"
                  style={{ display: "inline-block" }}
                />
                <div className="text-center">{review.text}</div>
              </a>
            </aside>
          ))}
        </div>
        <div className="flex justify-center items-center my-10 mb-20">
          <a className="action_blue_btn nocard pr" title="Get started">
            Get started <span className="right_arrow" />
          </a>
        </div>
      </section>
    </>
  );
};

export default CustomerAnalytics;
