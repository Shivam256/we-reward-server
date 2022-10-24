import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const testRoute = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    console.log(user, "here is the user brooooo!");
    return res.status(200).send({ message: "yo, we are hererererere!" });
  } catch (err) {
    return res.status(400).send({ message: "Server fail!" });
  }
};
