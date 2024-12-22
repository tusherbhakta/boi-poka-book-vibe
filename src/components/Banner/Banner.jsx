import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content items-center gap-10 lg:gap-10 xl:gap-20 flex-col lg:flex-row-reverse">
                <div className='max-w-fit'>
                    <img
                        src={bookImg}
                        className="max-w-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl lg:text-6xl font-bold mb-9 lg:mb-12">Books to freshen up your bookshelf</h1>
                    <button className=" rounded-2xl bg-[#23BE0A] text-white text-lg px-5 py-4 lg:text-xl font-bold lg:px-7 lg:py-5 ">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;