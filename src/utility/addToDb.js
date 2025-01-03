import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[];
    }
}
const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,'already includes');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // add tostify
        toast('Congrats you read the book');
    }
}
export {addToStoredReadList, getStoredReadList};