async function query(data, apiKey) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying API:", error);
    return { error: "Error querying API" };
  }
}

const form = document.getElementById("questionForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form submission

  const question = document.getElementById("question").value;
  const apiKey = document.getElementById("apiKey").value;

  try {
    const response = await query({ inputs: question }, apiKey);
    document.getElementById("response").innerText = response[0].generated_text;
  } catch (error) {
    console.error("Error handling query:", error);
    document.getElementById("response").innerText =
      "Error processing the query";
  }
});

/*

OpenAi Gpt-2

"https://api-inference.huggingface.co/models/openai-community/gpt2",

Llama 2 (paid model)

"https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf",

*/
