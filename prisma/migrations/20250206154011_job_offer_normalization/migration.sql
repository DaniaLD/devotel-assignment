/*
  Warnings:

  - You are about to drop the column `company` on the `JobOffer` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `JobOffer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title,companyId]` on the table `JobOffer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `JobOffer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "JobOffer_title_company_key";

-- AlterTable
ALTER TABLE "JobOffer" DROP COLUMN "company",
DROP COLUMN "skills",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobSkill" (
    "jobId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "JobSkill_pkey" PRIMARY KEY ("jobId","skillId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_title_companyId_key" ON "JobOffer"("title", "companyId");

-- AddForeignKey
ALTER TABLE "JobOffer" ADD CONSTRAINT "JobOffer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobSkill" ADD CONSTRAINT "JobSkill_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobSkill" ADD CONSTRAINT "JobSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
