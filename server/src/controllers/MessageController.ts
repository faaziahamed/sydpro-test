import { Request, Response } from "express";
import Message from "../models/Message";

// getting all posts
const getMessages = async (req: Request, res: Response) => {
  // get some posts
  const result = { data: [] };
  const messages = result.data;
  return res.status(200).json({
    message: messages,
  });
};

// getting a single post
const getMessage = async (req: Request, res: Response) => {
  // get the post id from the req
  const id: string = req.params.id;
  // get the post
  const result = { data: {} };
  const post: Message = <Message>result.data;
  return res.status(200).json({
    message: post,
  });
};

// updating a post
const updateMessage = async (req: Request, res: Response) => {
  // get the post id from the req.params
  return res.status(200).json({});
};

export default { getMessages, getMessage, updateMessage };
