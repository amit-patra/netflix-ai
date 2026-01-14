import { OPENAI_API_KEY } from "./constants";
import OpenAI from "openai";
export const gptClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
