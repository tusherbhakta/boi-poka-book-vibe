import React from 'react';

const Book = ({ book }) => {
    const { bookName, author, image, tags,category } = book;
    return (
        <div className="card bg-base-100 w-96 p-6 rounded-2xl border border-solid border-[#13131326] shadow-xl">
            <figure className=' rounded-2xl bg-[#F3F3F3]'>
                <img className='h-56'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body border-b-2 border-dashed border-[#13131326] ">
                <div className="card-actions justify-center">
                        {
                            tags.map(tag =>  <div className="badge badge-outline border-0 bg-[#94ce8b5d] text-[#23BE0A] text-base font-medium py-3 px-6">{tag}</div>)
                        }
                </div>
                <h2 className="card-title">
                    {bookName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>By: {author}</p>
            </div>
            <div className='flex justify-between mt-5'>
                <p>{category}</p>
                <p>star</p>
            </div>
        </div>
    );
};

export default Book;