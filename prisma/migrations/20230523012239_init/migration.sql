-- CreateTable
CREATE TABLE "Elefante" (
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "saudavel" BOOLEAN NOT NULL,

    CONSTRAINT "Elefante_pkey" PRIMARY KEY ("nome")
);
