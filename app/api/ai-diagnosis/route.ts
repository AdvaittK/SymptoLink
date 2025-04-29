import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    const { symptoms } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is not configured" }, { status: 500 })
    }

    const prompt = `
      As a medical AI assistant, analyze the following symptoms and provide:
      1. A list of possible conditions (with probability levels: High, Medium, Low)
      2. Brief descriptions of each condition
      3. General recommendations
      4. A medical disclaimer

      Symptoms: ${symptoms}

      Format the response as a JSON object with the following structure:
      {
        "possibleConditions": [
          {
            "name": "Condition Name",
            "probability": "High/Medium/Low",
            "description": "Brief description"
          }
        ],
        "recommendations": ["Recommendation 1", "Recommendation 2"],
        "disclaimer": "Medical disclaimer text"
      }
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: prompt,
      system:
        "You are a medical AI assistant. Provide helpful analysis of symptoms, but always include disclaimers about seeking professional medical advice.",
    })

    // Parse the response as JSON
    const analysis = JSON.parse(text)

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Error in AI diagnosis:", error)
    return NextResponse.json({ error: "Failed to analyze symptoms" }, { status: 500 })
  }
}
