import { stringify } from "postcss";
import { toast } from "react-toastify";

const getStoredWishlist = () =>{
    const storedListStr = localStorage.getItem('wishlist');
    if(storedListStr){
        const storeedList = JSON.parse(storedListStr);
        return storeedList;
    }
    else{
        return[];
    }

}

const addToWishlist = (id) =>{
    const storedList = getStoredWishlist();
    if(storedList.includes(id)){
        console.log('this is already exist!');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wishlist',storedListStr);
        toast('You add this book to your wishlist');
    }
}
export{addToWishlist, getStoredWishlist };