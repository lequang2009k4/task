/**
 * Generic function to format the Lambda response.
 * Includes standard headers and CORS support for Frontend integration.
 */
export const sendResponse = (statusCode, data) => {
    return {
        statusCode,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Support CORS for Frontend
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        },
        body: JSON.stringify(data),
    };
};

/**
 * Helper for 200 OK responses
 */
export const success = (data) => sendResponse(200, data);

/**
 * Helper for 201 Created responses
 */
export const created = (data) => sendResponse(201, data);

/**
 * Helper for 400 Bad Request responses
 */
export const clientError = (message) => sendResponse(400, { message });

/**
 * Helper for 404 Not Found responses
 */
export const notFound = (message) => sendResponse(404, { message });

/**
 * Helper for 500 Internal Server Error responses
 */
export const serverError = (error) => sendResponse(500, { 
    message: "Internal Server Error", 
    details: error.message 
});
