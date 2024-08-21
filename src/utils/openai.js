import OpenAI from "openai";
import { OPENAI_SECRET_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
