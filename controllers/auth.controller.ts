import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const testRoute = async (req: Request, res: Response) => {
  const { API_KEY, API_SECRET, PROJECT_KEY } = req.body;
  console.log(req.body, "opopopop");
  try {
    const user = await prisma.user.findFirst({
      where: {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
      },
    });
    console.log(user, "here is the user brooooo!");

    const project = await prisma.project.findUnique({
      where: {
        projectKey: PROJECT_KEY,
      },
    });

    console.log(project, "this is the project broooo");
    return res.status(200).send({ message: "yo, we are hererererere!" });
  } catch (err) {
    return res.status(400).send({ message: "Server fail!" });
  }
};
