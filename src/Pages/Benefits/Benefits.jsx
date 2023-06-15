import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Benefits = () => {


    return (
        <section>
        <SectionTitle
            subHeading={'Yoga School'}
            heading={"Benefits"}
        ></SectionTitle>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='w-[600px]' src={"https://i.ibb.co/gwCsW8d/bn.jpg"} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body bg-purple-100">
              <li>Professional Guidance: Yoga schools are led by experienced instructors who provide expert guidance and knowledge.</li>
              <li>Personal Growth: Yoga schools often focus on personal growth and self-awareness. </li>
              <li>Stress Reduction and Relaxation: One of the primary benefits of yoga is its ability to reduce stress and promote relaxation</li>
              <li>Physical Health and Flexibility: Yoga improves strength, flexibility, and balance.</li>
              <li>Mind-Body Connection: Yoga emphasizes the connection between the mind and body.</li>
          </div>
        </div>
      </div>
      </div>
      </section>
    );
};

export default Benefits;