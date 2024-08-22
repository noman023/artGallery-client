import Marquee from "react-fast-marquee";
import SectionHead from "../SectionHead/SectionHead";

import userPhoto from '../../assets/user.jpg'

export default function Reviews() {
  return (
    <>
      <SectionHead>User Reviews</SectionHead>

      <div className="my-10">
        <Marquee >
          <div className="card card-compact w-96 bg-gray-50 shadow-xl p-2 mx-5">
            <div className="avatar mx-auto">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userPhoto} />
              </div>
            </div>

            <div className="card-body ">
              <h2 className="card-title mx-auto">Emily D.</h2>
              <p className="text-left">
                I recently purchased a portrait drawing from this site, and I
                couldn't be happier with the result! The attention to detail is
                exceptional, and it truly captures the essence of my loved one.
                Highly recommend!
              </p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-gray-50 shadow-xl p-2 mx-5">
            <div className="avatar mx-auto">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPhoto} />
              </div>
            </div>

            <div className="card-body ">
              <h2 className="card-title mx-auto">Mark S.</h2>
              <p className="text-left">
                The watercolor painting I bought exceeded my expectations. The
                colors are vibrant, and the floral design adds a touch of
                elegance to my living room. The only downside was the slightly
                longer processing time, but it was definitely worth the wait.?
              </p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-gray-50 shadow-xl p-2 mx-5">
            <div className="avatar mx-auto">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPhoto} />
              </div>
            </div>

            <div className="card-body ">
              <h2 className="card-title mx-auto">Sarah L.</h2>
              <p className="text-left">
                I'm impressed by the quality of the oil painting I received. The
                artist perfectly captured the mood I was going for, and the
                abstract design adds a modern flair to my home decor. The
                customization option allowed me to personalize it to my liking.
                Overall, a great experience!
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
