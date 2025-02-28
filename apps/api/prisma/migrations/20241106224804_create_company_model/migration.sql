/*
  Warnings:

  - Added the required column `company_id` to the `departaments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_departaments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company_id" TEXT NOT NULL,
    CONSTRAINT "departaments_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_departaments" ("color", "created_at", "id", "name") SELECT "color", "created_at", "id", "name" FROM "departaments";
DROP TABLE "departaments";
ALTER TABLE "new_departaments" RENAME TO "departaments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
