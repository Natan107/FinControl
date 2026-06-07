import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "../data/db.json");

async function lerDB() {
  const conteudo = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(conteudo);
}

async function salvarDB(dados) {
  await fs.writeFile(dbPath, JSON.stringify(dados, null, 2), "utf-8");
}

export async function listarReceitas(req, res) {
  try {
    const db = await lerDB();
    return res.status(200).json(db.receitas);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao listar receitas",
      error: error.message,
    });
  }
}

export async function criarReceita(req, res) {
  try {
    const { descricao, valor, data } = req.body;

    if (!descricao || !valor || !data) {
      return res.status(400).json({
        message: "Descrição, valor e data são obrigatórios.",
      });
    }

    const db = await lerDB();

    const novaReceita = {
      id: randomUUID(),
      descricao,
      valor,
      data,
    };

    db.receitas.push(novaReceita);

    await salvarDB(db);

    return res.status(201).json(novaReceita);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao criar receita",
      error: error.message,
    });
  }
}