/*
  Warnings:

  - Added the required column `image` to the `Companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Companies" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
