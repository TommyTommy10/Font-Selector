const fetch = require("node-fetch");

exports.handler = async (event) => {
    // Recupera la chiave API dalle variabili d'ambiente
    const apiKey = process.env.OPENAI_API_KEY;

    // Endpoint API di OpenAI
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const body = JSON.parse(event.body);

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Errore nel contattare OpenAI" })
        };
    }
};
