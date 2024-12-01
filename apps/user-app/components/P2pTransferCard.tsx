import React from "react";

function P2pTransferCard({
  transactions,
  userId,
}: {
  transactions: {
    id: Number;
    timestamp: Date;
    fromUser: Number;
    toUser: Number;
    amount: Number;
  }[];
  userId: Number;
}) {
  return (
    <div className="bg-[#EEEEEE] w-full bg-rounded p-4 m-3">
      <div className="text-xl font-bold capitalize border-b p-3 border-[#d8d6d6]">
        {transactions.length ? `Recent transactions` : `No Transactions made`}
      </div>
      {transactions.map((t) => (
        <div className="w-full flex justify-between rounded-md items-center gap-2 p-2 border-b bg-[#fffcfc] border-[#bdbdbd]">
          <div className="flex flex-col gap-1 justify-between items-start">
            <div className="font-bold text-md">
              {String(t.fromUser) === String(userId)?"Sent":"Received"} INR 
            </div>
            <div className="time capitalize bold text-sm text-[#363636]">
              {String(t.timestamp).substring(0, 24)}
            </div>
          </div>
          <div className="inline-block text-xl font-bold">
          {String(t.fromUser) === String(userId)?"-":"+"} Rs {String(Number(t.amount) / 100)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default P2pTransferCard;
