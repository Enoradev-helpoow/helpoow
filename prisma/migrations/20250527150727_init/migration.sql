-- CreateTable
CREATE TABLE "Annonce" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "duree" TEXT NOT NULL,
    "utilisateur" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "prix" INTEGER NOT NULL,
    "localisation" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
