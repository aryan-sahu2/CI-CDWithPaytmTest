"use client"

import { Card } from "@repo/ui/card";
import React, { useState } from "react";

import { TextInput } from "@repo/ui/text-input";
import { Center } from "@repo/ui/center";
import { Button } from "@repo/ui/button";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="h-[60vh]">
      <Center>
        <Card title="Send">
          <div className="py-4 min-w-72 pt-2 ">
            <TextInput
              label="Number"
              placeholder="1231231234"
              onChange={(value) => setNumber(value)}
            />
            <TextInput
              label="Amount"
              placeholder="100"
              onChange={(value) => setAmount(value)}
            />
            <div className="pt-4 justify-center flex">
              <Button onClick={() => {
                p2pTransfer(number, Number(amount)*100)
              }}>Send</Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}

export default SendCard;
