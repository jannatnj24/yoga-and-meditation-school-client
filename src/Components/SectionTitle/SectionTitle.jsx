import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-green-600 text-2xl mb-2 ">--- {subHeading} ---</p>
        <h3 className="uppercase text-3xl border-y-4 py-4 ">{heading}</h3>
    </div>
    );
};

export default SectionTitle;