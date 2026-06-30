-- CreateTable
CREATE TABLE "Table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mjId" INTEGER NOT NULL,
    "nameTable" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Table_mjId_fkey" FOREIGN KEY ("mjId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Joueur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "joueurId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "Joueur_joueurId_fkey" FOREIGN KEY ("joueurId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Joueur_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Joueur_joueurId_tableId_key" ON "Joueur"("joueurId", "tableId");
