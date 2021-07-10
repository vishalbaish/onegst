import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Message from './Message/Message'
import CancelledMessage from './CancelledMessage/CancelledMessage';

function Transactions() {

    const [transactionDetails, setTransactionDetails] = useState([]);

    useEffect(() => {
        db.collection("transactions")
        .doc("objectID")
        .get()
        .then((res) => {
            setTransactionDetails(res.data());
            console.log(res.data());
        }).catch((err) => {console.error(err);})
    }, [])

    
    return (
        <div>
            { transactionDetails.cancelled ? <CancelledMessage {...transactionDetails}/> : <Message {...transactionDetails}/>}
             
        </div>
    )
}

export default Transactions
