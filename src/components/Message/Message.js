import React from 'react';
import "./Message.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export default function Message({ amount, transactionDate, creatorId, subType, typeForCreator }) { 


    const [user] = useAuthState(auth);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const TransactionDate = transactionDate ? new Date(transactionDate*1).toLocaleDateString("en-US", options) : "";
    var CheckSubType = true;
    var CheckTypeForCreator = true;
    if (user.uid === creatorId ) {
      CheckSubType = subType===0 ? false : true;//check if subtype is give or recieved
      CheckTypeForCreator = typeForCreator===0 ? false : true;// check if TypeForCreator is money or goods
    } else {
      CheckSubType = subType===0 ? true : false;//check if subtype is give or recieved
      CheckTypeForCreator = typeForCreator===0 ? true : false;// check if TypeForCreator is money or goods
    }


    var type = "";
    var icon = "";
    var label = "";
    var color = "";
    if (CheckSubType && CheckTypeForCreator) { //when subtype is give and typeforCreator is money
        type = "payment_right";//show payment on right side
        icon = "camera";//show camera icon
        label = "Payment Out"
        color= "orange"
    } else if (!CheckSubType && CheckTypeForCreator) {//when subtype is recieve and typeforCreator is money
        type = "invoice_right";//show invoice on right side
        icon = "pdf";//show pdf icon
        label = "Sale Invoice"
        color= "orange"
    } else if (CheckSubType && !CheckTypeForCreator) {//when subtype is give and typeforCreator is goods
        type = "payment_left";//show payment on left side
        icon = "camera";
        label = "Payment In"
        color = "blue"
    } else if (!CheckSubType && !CheckTypeForCreator) {//when subtype is recieve and typeforCreator is goods
            type = "invoice_left";//show Invoice on left side
            icon = "pdf;"
            label = "Purchase Invoice"
            color= "blue"
    }


  return (
    <div className={`message ${type}`}>
    <Card className="card">
      <CardContent>
        <Typography variant="h4" className={color} component="h1">
        {`₹${amount ? amount : ""}`}  {/* display amount  */}
        </Typography>
        <Typography variant="h6"component="h3">
        {label}
        </Typography>
        <Typography variant="body2" component="p">
        {TransactionDate} {/* display Transaction Date  */}
        </Typography>
         <IconButton>
         {icon === "camera" ? //showing camera icon or pdf icon
             <CameraAltIcon /> : 
             <PictureAsPdfIcon/>} 
          </IconButton>  
      </CardContent>
    </Card>
    </div>
  );
}
