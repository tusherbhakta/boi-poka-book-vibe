import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import { getStoredWishlist } from '../../utility/wishlist';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooksData = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, allBooksData);
        const bookList = allBooksData.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(bookList);
    }, []);
    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const allWishlist = allBooksData.filter(book => storedWishlistInt.includes(book.bookId));
        setWishList(allWishlist);
    }, []);

    const handleSort = sortType =>{
        setSort(sortType)

        if(sortType === 'Rating'){
            const sortedReadList = [...readList].sort((a,b) => a.rating-b.rating);
            const sortWishList = [...wishList].sort((a,b) => a.rating-b.rating);
            setReadList(sortedReadList);
            setWishList(sortWishList);
            
        }
        if(sortType === 'No Of Page'){
            const sortedReadList = [...readList].sort((a,b) => a.totalPages-b.totalPages);
            const sortWishList = [...wishList].sort((a,b) => a.totalPages-b.totalPages);
            setReadList(sortedReadList);
            setWishList(sortWishList);
        }
    }

    return (
        <div className='mb-14'>
            <h2 className="text-3xl">Listed Books: </h2>
            <div className='flex justify-center mb-4'>
            <div className="dropdown  dropdown-end">
                <div tabIndex={0} role="button" className=" bg-[#23BE0A] hover:bg-white text-white hover:text-[#23BE0A]  hover:border hover:border-[#23BE0A] px-5 py-4 rounded-2xl  m-1">{ sort? `Sort By: ${sort}`:'Sort By:'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() =>handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() =>handleSort('No Of Page')}><a>No Of Page</a></li>
                </ul>
            </div>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>My Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl font-bold mb-8'>The books I have already read: {readList.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                readList.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl font-bold mb-8'>The books I am going to read: {wishList.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;