import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddtransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  //irá acessar as trasações do meu banco de dados com prisma
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        {/* TITULO E BOTÃO */}
        <div className="w=full flex items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddtransactionButton />
        </div>
        <ScrollArea>
          <DataTable columns={TransactionColumns} data={transactions} />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionPage;
