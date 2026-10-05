/*
  Warnings:

  - You are about to drop the column `rating` on the `ChessBoard` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ChessBoard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChessBoard" DROP COLUMN "rating",
DROP COLUMN "status";
