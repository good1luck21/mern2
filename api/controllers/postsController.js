import Bot from "../models/botModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const bots = await Bot.find();
    res.json({ bots });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const bot = await Bot.create(req.body);
    res.json({ message: "ok", bot });
  } catch (e) {
    console.log(e);
  }
};
