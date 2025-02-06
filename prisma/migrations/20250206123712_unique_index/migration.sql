/*
  Warnings:

  - A unique constraint covering the columns `[title,company]` on the table `JobOffer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_title_company_key" ON "JobOffer"("title", "company");
