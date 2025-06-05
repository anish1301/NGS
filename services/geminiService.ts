
import { GoogleGenAI, Chat, GenerateContentResponse, Part, Content } from "@google/genai";
import { AI_ASSISTANT_SYSTEM_PROMPT, PRODUCTS_DATA, SERVICES_DATA } from '../constants';
import { AIAssistantData } from "../types";

// IMPORTANT: API_KEY must be set in the environment variables.
// For example, in a Node.js environment or via bundler environment plugin.
// const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; // Example for Create React App
const API_KEY = process.env.API_KEY; // Standard way if bundler supports it

if (!API_KEY) {
  console.warn(
    "Gemini API Key not found. AI Assistant will not function. " +
    "Please set the API_KEY environment variable."
  );
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

let chatInstance: Chat | null = null;

const assistantData: AIAssistantData = {
  products: PRODUCTS_DATA,
  services: SERVICES_DATA,
};

const getChatInstance = (): Chat | null => {
  if (!ai) return null;
  if (!chatInstance) {
    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash-preview-04-17',
      config: {
        systemInstruction: AI_ASSISTANT_SYSTEM_PROMPT(assistantData),
      },
      // history: [] // Optionally, you can pre-populate history
    });
  }
  return chatInstance;
};

export const sendMessageToGemini = async (
  message: string,
  imageParts: Part[] = [] // Though not used in current AI Assistant UI, kept for future extension
): Promise<{ text: string; groundingChunks?: any[] }> => {
  if (!API_KEY || !ai) {
    return { text: "AI Assistant is currently unavailable. API Key not configured." };
  }

  const chat = getChatInstance();
  if (!chat) {
     return { text: "AI Assistant could not be initialized." };
  }

  try {
    let params: { message: string | Part[] };

    if (imageParts.length > 0) {
      // If imageParts are present, message should be an array of Parts
      const combinedParts: Part[] = [...imageParts, { text: message }];
      params = { message: combinedParts };
    } else {
      // If no imageParts, message can be a simple string
      params = { message: message };
    }
    
    const response: GenerateContentResponse = await chat.sendMessage(params);

    const responseText = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    
    return { 
      text: responseText,
      groundingChunks: groundingMetadata?.groundingChunks 
    };

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Reset chat instance on error to start fresh next time.
    // This is a simple error handling, more sophisticated logic might be needed.
    chatInstance = null; 
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            return { text: "AI Assistant Error: Invalid API Key. Please check your configuration." };
        }
        if (error.message.toLowerCase().includes('quota') || error.message.toLowerCase().includes('rate limit')) {
            return { text: "AI Assistant Error: API quota exceeded. Please try again later." };
        }
        return { text: `AI Assistant Error: ${error.message}` };
    }
    return { text: "An unexpected error occurred with the AI Assistant." };
  }
};

// Function to reset the chat if needed (e.g., user wants to start a new conversation)
export const resetChat = () => {
  chatInstance = null;
};