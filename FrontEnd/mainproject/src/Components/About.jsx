import React from 'react';
import a7 from '../assets/about_img/a7.avif';
import a2 from '../assets/about_img/a2.avif';
import a3 from '../assets/about_img/a3.avif';
import "../Css/Common.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="container-fluid">
        {/* Section 1 */}
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-md">
              <img src={a7} className="img-fluid bg-transparent" alt="Why use this website?" />
            </div>
            <div className="col-md">
              <h3 className="text-danger">Why Use This Website?</h3>
              <p className="fs-4">
                Our e-commerce platform is designed for a seamless and user-friendly shopping experience. With an intuitive interface, customers can effortlessly browse, select, and purchase their desired products. We provide multiple secure payment options to accommodate diverse user preferences, ensuring a smooth and stress-free transaction process.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-md">
              <h3 className="text-danger">What Does It Feel Like to Use This Website?</h3>
              <p className="fs-4">
                Our e-commerce site is designed for ease of use. The moment you enter, it feels like stepping into a modern shopping mall—exciting, vibrant, and engaging. The smooth navigation and minimalistic design make your shopping experience enjoyable and hassle-free.
              </p>
            </div>
            <div className="col-md">
              <img src={a2} className="img-fluid bg-transparent" alt="Website Experience" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-md">
              <img src={a3} className="img-fluid bg-transparent" alt="Benefits of Online Shopping" />
            </div>
            <div className="col-md">
              <h3 className="text-danger">Benefits of Online Shopping</h3>
              <p className="fs-4">
                E-commerce has transformed the shopping experience by offering unparalleled convenience and accessibility. It allows users to shop anytime, anywhere, while enabling businesses to reach a global audience. With reduced operational costs, competitive pricing benefits customers. Personalized shopping experiences and efficient home delivery save time, making online shopping an integral part of modern commerce.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

