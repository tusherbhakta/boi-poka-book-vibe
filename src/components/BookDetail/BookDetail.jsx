import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';
import { addToWishlist } from '../../utility/wishlist';

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    }
    const handleAddToWishlist = (id) =>{
        addToWishlist(id);
    }
    const {bookId: currentBookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full  flex-col lg:flex-row">
                <div className='w-1/2 p-[74px] rounded-2xl bg-[#1313130a]'>
                    <img
                        src={image}
                        className="w-full  rounded-lg shadow-2xl" />
                </div>
                <div className='ml-12 w-1/2 '>
                    <h1 className="text-[40px] font-bold">{bookName}</h1>
                    <p className="mt-4 text-xl font-medium">By: {author}</p>
                    <div className='my-6 py-4 text-xl font-medium text-[#131313CC] border-solid-[#13131326] border-y-2'>
                        <p>{category}</p>
                    </div>
                    <p className='text-[#131313B3]'><span className='text-[#131313] font-bold'>Review: </span>{review} </p>

                    <div className='flex gap-10 my-6 pb-6 border-b-2  border-solid-[#13131326]'>
                        <p className='font-bold '>Tag </p>
                        {
                            tags.map((tag, i) => <span className=' text-[#23BE0A]' key={i} tag={tag} >#{tag}</span>)
                        }
                    </div>
                    <table className='mb-8'>
                        <tr>
                            <td className='w-40 text-[#131313B3]'>Number of Pages:</td>
                            <td className='font-semibold'>{totalPages}</td>
                        </tr>
                        <tr>
                            <td className='w-40 text-[#131313B3]'>Publisher:</td>
                            <td td className='font-semibold'>{publisher}</td>
                        </tr>
                        <tr>
                            <td className='w-40 text-[#131313B3]'>Year of Publishing:</td>
                            <td td className='font-semibold'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className='w-40 text-[#131313B3]  '>Rating:</td>
                            <td td className='font-semibold'>{rating}</td>
                        </tr>
                    </table>
                    <div>
                        <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline border-[#50B1C9]  py-4 px-7 mr-5 hover:bg-[#50B1C9]">Mark as Read</button>
                        <button onClick={() => handleAddToWishlist(bookId)} className="btn btn-outline border-[#50B1C9]  py-4 px-7 hover:bg-[#50B1C9]">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;