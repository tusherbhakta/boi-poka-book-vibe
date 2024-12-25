import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div>
            <h2 className="text-3xl">Listed Books: </h2>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>My Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl font-bold'>The books I have already read:</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl font-bold'>The books I am going to read:</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;