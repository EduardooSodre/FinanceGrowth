import { db } from "../_lib/prisma";

import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddtransactionButton from "../_components/add-transaction-button";

const TransactionPage = async () => {
  //irá acessar as trasações do meu banco de dados com prisma
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TITULO E BOTÃO */}
      <div className="w=full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddtransactionButton />
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionPage;
