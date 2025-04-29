// This is a mock API service for symptom analysis
// In a real app, this would connect to an AI service like OpenAI

export async function analyzeSymptoms(symptoms: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Mock response - in a real app, this would come from an AI API
  return {
    possibleConditions: [
      {
        name: "Common Cold",
        probability: "High",
        description:
          "A viral infection of the upper respiratory tract. Usually harmless and resolves within 7-10 days.",
      },
      {
        name: "Seasonal Allergies",
        probability: "Medium",
        description: "An immune system response to allergens like pollen, causing symptoms similar to a cold.",
      },
      {
        name: "Sinusitis",
        probability: "Low",
        description:
          "Inflammation of the sinuses, often caused by infection, allergies or structural issues. Can cause facial pain, pressure, and nasal congestion.",
      },
    ],
    recommendations: [
      "Stay hydrated and get plenty of rest",
      "Consider over-the-counter medications for symptom relief",
      "Monitor your temperature for signs of fever",
      "If symptoms worsen or persist for more than 7 days, consult a healthcare provider",
    ],
    disclaimer:
      "This analysis is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.",
  }
}
