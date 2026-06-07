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

export async function listarDespesas(req, res) {
  try {
    const db = await lerDB();
    return res.status(200).json(db.despesas);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao listar despesas",
      error: error.message,
    });
  }
}

export async function criarDespesa(req, res) {
  try {
    const { descricao, valor, data } = req.body;

    if (!descricao || !valor || !data) {
      return res.status(400).json({
        message: "Descrição, valor e data são obrigatórios.",
      });
    }

    const db = await lerDB();

    const novaDespesa = {
      id: randomUUID(),
      descricao,
      valor,
      data,
    };

    db.despesas.push(novaDespesa);

    await salvarDB(db);

    return res.status(201).json(novaDespesa);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao criar despesa",
      error: error.message,
    });
  }
}