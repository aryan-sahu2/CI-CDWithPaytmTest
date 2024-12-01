import { Card } from "@repo/ui/card";
import React from "react";

function OnRampTransaction({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center py-8">No Recent Transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((x) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {x.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {x.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default OnRampTransaction;
