-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "academic_papers" INTEGER NOT NULL,
    "students_total" INTEGER NOT NULL,
    "student_rating" INTEGER NOT NULL,
    "submissionId" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "institution_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "students_total" INTEGER NOT NULL,
    "undergraduates_total" INTEGER NOT NULL,
    "postgraduates_total" INTEGER NOT NULL,
    "staff_total" INTEGER NOT NULL,
    "academic_papers" INTEGER NOT NULL,
    "institution_income" INTEGER NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
