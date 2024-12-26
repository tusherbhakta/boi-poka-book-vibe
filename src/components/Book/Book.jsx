import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category,rating,totalPages } = book;
    return (
        <div className="card mx-auto bg-base-100 w-96 p-6 rounded-2xl border border-solid border-[#13131326] shadow-xl">
            <Link to={`/books/${bookId}`}>
                <figure className=' rounded-2xl py-2 bg-[#F3F3F3]'>
                    <img className='h-56'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body border-b-2 border-dashed border-[#13131326] ">
                    <div className="card-actions justify-center">
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-outline border-0 bg-[#94ce8b5d] text-[#23BE0A] text-base font-medium py-3 px-6">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>By: {author}</p>
                </div>
            </Link>
            <div className='flex justify-between mt-5'>
                <p>{category}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default Book;