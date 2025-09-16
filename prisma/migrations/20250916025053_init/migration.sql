-- CreateEnum
CREATE TYPE "Status" AS ENUM ('STORED', 'RETURNED', 'DISCARDED');

-- CreateTable
CREATE TABLE "Line" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LostItem" (
    "id" SERIAL NOT NULL,
    "lineId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "itemName" TEXT NOT NULL,
    "center" TEXT,
    "status" "Status" NOT NULL,
    "imageUrl" TEXT,
    "notes" TEXT,

    CONSTRAINT "LostItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Line_name_key" ON "Line"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "LostItem" ADD CONSTRAINT "LostItem_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LostItem" ADD CONSTRAINT "LostItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
