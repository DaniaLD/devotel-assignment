-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "skills" TEXT[],
    "postedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);
