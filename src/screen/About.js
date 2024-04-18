import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const shadow={
    padding:"3rem","boxShadow":" rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",borderRadius:"45px"
}

export default function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <main role="main" className="p-3">
          <div className="jumbotron">
            <div className="container" >
              <h1 className="display-3 fw-bold border-bottom py-3 my-3">About Steadofoods</h1>
              <h4>
                Welcome to Steadofoods – Your Culinary Journey Begins Here!
              </h4>
              <p>
                At Steadofoods, we believe that great meals have the power to
                bring people together, create lasting memories, and add a dash
                of joy to life. Our mission is to provide a seamless and
                delightful food ordering experience, connecting you with a
                diverse array of culinary delights from the comfort of your
                home.
              </p>
            </div>
          </div>

          <div className="container border-top py-3 my-3">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4" style={shadow}>
                <h2>Our Story</h2>
                <p>
                  Steadofoods started with a simple yet profound idea: to make
                  ordering food not just a transaction but an experience.
                  Founded by a team of food enthusiasts and tech innovators, our
                  platform was born out of a shared love for delicious cuisine
                  and the desire to make it easily accessible to everyone.
                </p>
              </div>
              <div className="col-md-4" style={shadow}>
                <h2>What Sets Us Apart</h2>
                <p>
                  Exceptional Variety: We bring together a curated selection of
                  restaurants, cafes, and eateries, offering a diverse menu to
                  cater to every palate. From comforting classics to bold,
                  exotic flavors, there's something for everyone at Steadofoods.
                  Seamless Ordering: Our user-friendly platform ensures that
                  ordering your favorite meals is quick and effortless. Whether
                  you're browsing from your computer or on the go with our
                  mobile app, we've designed Steadofoods to fit seamlessly into
                  your lifestyle. Quality and Freshness: We prioritize quality
                  and freshness in every dish. Partnering with renowned
                  establishments, we strive to deliver not just meals but
                  culinary experiences that meet the highest standards of taste
                  and quality.
                </p>
              </div>
              <div className="col-md-4" style={shadow}>
                <h2>Our Team</h2>
                <p>
                  Behind Steadofoods is a passionate team committed to creating
                  a world where good food is never more than a few clicks away.
                  From developers and designers to food critics and customer
                  support, each member of the Steadofoods family plays a crucial
                  role in delivering excellence to your doorstep.
                </p>
              </div>
            </div>

            
            <div>
              <h1 className="border-bottom py-3 my-3">Join Us on this Culinary Adventure</h1>
              <p>
                We invite you to explore the world of Steadofoods – a place
                where flavor knows no bounds, and every meal is a celebration.
                Join us on this culinary adventure, and let Steadofoods be your
                trusted companion for all your dining experiences. 
              </p>
              <p>
              Indulge. Savor. Enjoy.
              </p>
              <p>
                ANURADHA GUPTA
              </p>
              <p>
              The Steadofoods Team
              </p>
              <p>
              Feel free to customize this content to better reflect the unique aspects and values of your food ordering platform.
              </p>

            </div>
          </div>
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
