import './WhyChooseUs.css';

const WhychooseUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know how to handle it. With working knowledge of online, SEO, and social media.</p>
        </div>
        <div className="row">
          <div className="col-1">
            <div className="item one"> 
              <h6>Affordable Luxury</h6>
              <p>We use the latest technology for the latest world because we know the demand of peoples.</p>
            </div>
          </div>
          <div className="col-2">
            <div className="item two"> 
              <h6>Creative Design</h6>
              <p>We are always creative and always listen to our customers, and we mix these two things and make the best design.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="item three">
              <h6>24 x 7 User Support</h6>
              <p>If our customer has any problem and any query, we are always happy to help them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhychooseUs;
