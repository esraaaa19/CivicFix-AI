import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { image, mimeType, description } = body;

    if (!image || !mimeType) {
      return NextResponse.json(
        { error: "Image is required." },
        { status: 400 }
      );
    }

    const prompt = `
You are CivicFix AI, an intelligent civic issue assessment system.

Analyze the uploaded image and identify the most likely civic or
infrastructure problem visible in it.

Return ONLY valid JSON in exactly this structure:

{
  "issue": "short issue name",
  "category": "one category",
  "severity": 0,
  "priority": "LOW | MEDIUM | HIGH | CRITICAL",
  "confidence": 0,
  "description": "clear description of what is visible",
  "risk": "potential public safety or infrastructure risk",
  "recommendedAction": "recommended action for the responsible authority",
  "authority": "most likely responsible department"
}

Rules:

- severity must be an integer from 0 to 100.
- confidence must be an integer from 0 to 100.
- Do not invent details that cannot reasonably be inferred from the image.
- If the image does not clearly show a civic issue, explain that in the
  description and assign LOW severity.
- Keep each text field concise and useful for a civic complaint.
- Focus on observable evidence.
- Do not include markdown.
- Return JSON only.

Additional user description:
${description || "No additional description provided."}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
            {
              inlineData: {
                mimeType,
                data: image,
              },
            },
          ],
        },
      ],
    });

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    const cleaned = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    const analysis = JSON.parse(cleaned);

    return NextResponse.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("CivicFix AI error:", error);

    return NextResponse.json(
      {
        error: "AI analysis failed. Please try again.",
      },
      { status: 500 }
    );
  }
}
