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
    const allBooksData = useLoaderData();
    useEffect(() =>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, allBooksData);
        const bookList = allBooksData.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(bookList);
    },[]);
    useEffect(() =>{
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const allWishlist = allBooksData.filter(book => storedWishlistInt.includes(book.bookId));
        setWishList(allWishlist);
    },[])

    return (
        <div className='mb-14'>
            <h2 className="text-3xl">Listed Books: </h2>

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