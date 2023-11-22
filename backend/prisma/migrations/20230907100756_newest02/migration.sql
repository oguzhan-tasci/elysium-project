/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `stars` to the `Companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aboutService` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectedDate` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- AlterTable
ALTER TABLE "Companies" ADD COLUMN     "stars" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "aboutService" TEXT NOT NULL,
ADD COLUMN     "images" TEXT NOT NULL,
ADD COLUMN     "selectedDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "stars" INTEGER NOT NULL,
ADD COLUMN     "threeSteps" TEXT[],
ADD COLUMN     "youNeedToKnow" TEXT[];

-- DropTable
DROP TABLE "Comments";

-- CreateTable
CREATE TABLE "ServicesComments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "servicesId" INTEGER NOT NULL,

    CONSTRAINT "ServicesComments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyComments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companiesId" INTEGER NOT NULL,

    CONSTRAINT "CompanyComments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServicesComments" ADD CONSTRAINT "ServicesComments_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyComments" ADD CONSTRAINT "CompanyComments_companiesId_fkey" FOREIGN KEY ("companiesId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
