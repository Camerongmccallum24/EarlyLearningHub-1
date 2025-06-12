import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function generateChatResponse(
  messages: ChatMessage[],
  context: string = "general"
): Promise<string> {
  try {
    const systemPrompt = getSystemPrompt(context);
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate AI response");
  }
}

function getSystemPrompt(context: string): string {
  const basePrompt = `You are a helpful career assistant for GRO Early Learning, a community-owned social enterprise providing early childhood education services in regional Queensland, Australia. You help people learn about career opportunities, company culture, benefits, and application processes.

Key information about GRO Early Learning:
- Locations: Mount Isa, Moranbah, and Charters Towers
- Community-owned social enterprise focused on early childhood education
- Offers competitive benefits including professional development, flexible work arrangements
- Values: Community focus, quality education, professional growth
- Hiring for roles like Early Childhood Educators, Assistants, Cooks, Administration staff

Always be friendly, professional, and helpful. Provide specific information when possible and encourage users to apply or contact for more details.`;

  switch (context) {
    case "jobs":
      return `${basePrompt}

Focus on helping with job-related queries including:
- Available positions in Mount Isa, Moranbah, and Charters Towers
- Job requirements and qualifications
- Application process and tips
- Career progression opportunities`;

    case "culture":
      return `${basePrompt}

Focus on company culture topics including:
- Work environment and team dynamics
- Values and mission of GRO Early Learning
- Benefits and perks
- Community involvement and social enterprise aspects
- Work-life balance`;

    case "faq":
      return `${basePrompt}

Focus on answering frequently asked questions about:
- Qualifications needed for early childhood education roles
- Living and working in regional Queensland
- Application timelines and processes
- Training and development opportunities`;

    default:
      return `${basePrompt}

You can help with any questions about careers at GRO Early Learning, from job opportunities to company culture to application guidance.`;
  }
}