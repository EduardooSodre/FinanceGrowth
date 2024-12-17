/*
  Warnings:

  - The values [WITHDRAW] on the enum `TransactionType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `userId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "userId" TEXT NOT NULL;
