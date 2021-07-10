import React from 'react'
import Card from "@material-ui/core/Card"
import { IconButton } from '@material-ui/core';
import Typography from "@material-ui/core/Typography"
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import CardContent from '@material-ui/core/CardContent'

function CancelledMessage({ transactionDate }) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const TransactionDate = transactionDate ? new Date(transactionDate*1).toLocaleDateString("en-US", options) : "";

    return (
        <div className="message">
            <Card className="card">
                <CardContent>
                    <Typography variant="body2"component="p">
                     {TransactionDate}
                    </Typography>
                    <IconButton className="">
                        <BlockOutlinedIcon color="secondary" />
                    </IconButton>
                </CardContent>
            </Card>
        </div>
    )
}

export default CancelledMessage
