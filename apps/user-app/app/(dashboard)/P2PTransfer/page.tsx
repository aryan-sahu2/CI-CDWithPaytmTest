import React from "react";
import SendCard from "../../../components/SendCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import P2pTransferCard from "../../../components/P2pTransferCard";
async function getP2pTransactions(index: number) {
  const session = await getServerSession(authOptions);
  const fromP2pTransactions = await prisma.p2pTransfer.findMany({
    take: 10,
    skip: index * 10,
    where: {
      fromUserId: Number(session?.user?.id),
      //   toUserId: Number(session?.user?.id),
    },
  });
  const toP2pTransactions = await prisma.p2pTransfer.findMany({
    take: 10,
    skip: index * 10,
    where: {
      //   fromUserId: Number(session?.user?.id),
      toUserId: Number(session?.user?.id),
    },
  });
  const p2pTransactions = fromP2pTransactions.concat(toP2pTransactions);
  const sortedP2pTransactions = [...p2pTransactions].sort((a,b)=>b.timestamp.getTime() - a.timestamp.getTime())

  return {
    transactions: sortedP2pTransactions.map((txn) => ({
      id: txn.id,
      timestamp: txn.timestamp,
      fromUser: txn.fromUserId,
      toUser: txn.toUserId,
      amount: txn.amount,
    })),
    userAccountId: session?.user?.id,
  };
}

async function page() {
  const index = 0;
  const p2pTransactions = await getP2pTransactions(index);
  return (
    <div className="h-fit w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        P2P Transfer
      </div>
      <div className="flex items-center gap-10 w-full">
        <SendCard />
        <P2pTransferCard transactions={p2pTransactions.transactions} userId={p2pTransactions.userAccountId} />
      </div>
    </div>
  );
}

export default page;
