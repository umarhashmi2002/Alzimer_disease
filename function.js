import OpenAI from 'openai';

// Lambda handler function
exports.handler = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const openai = new OpenAI({
        apiKey: process.env.VITE_OPENAI_API_KEY, // Ensure this is set in Lambda's environment variables
    });

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: 'Provide a personalized nutrition recommendation based on the user\'s fitness data.' }
            ],
            max_tokens: 100,
        });

        // Set CORS headers
        const headers = {
            "Access-Control-Allow-Origin": "*", // Allow from all origins
            "Access-Control-Allow-Headers": "Content-Type,Authorization", // Allow specific headers
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST", // Allow specific methods
        };

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({
                message: response.choices[0].message?.content.trim() || 'No recommendation available.',
            }),
        };
    } catch (err) {
        // Set CORS headers for error responses as well
        const headers = {
            "Access-Control-Allow-Origin": "*", // Allow from all origins
            "Access-Control-Allow-Headers": "Content-Type,Authorization", // Allow specific headers
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST", // Allow specific methods
        };

        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
