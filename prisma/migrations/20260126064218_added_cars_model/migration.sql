-- CreateTable
CREATE TABLE "Cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marka" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "madeIn" TEXT NOT NULL
);
