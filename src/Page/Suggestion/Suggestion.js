import React from 'react';
import ContactForm from './ContactForm';

const Suggestion = () => {
    return (
        <>
        <section className="lg:max-w-4xl lg:mx-auto px-5">
          <p className="text-center mt-10 text-2xl ">
            Do you see anything you would like to be improved?Enter it in the
            suggestion box below. Thank you
          </p>
           
          <ContactForm></ContactForm>
        </section>
      </>
    );
};

export default Suggestion;