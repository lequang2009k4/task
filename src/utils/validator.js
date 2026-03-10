/**
 * Validator Utility
 * Provides methods to validate incoming request data.
 */
export const validator = {
    /**
     * Validates data for creating a new task.
     * @param {Object} data - The request body data.
     * @returns {Object} An object containing the validation state and any error messages.
     */
    validateCreateTask: (data) => {
        const errors = [];
        
        // Check if title is missing or contains only whitespace after trimming
        if (!data.title || data.title.trim() === "") {
            errors.push("Title is required and cannot be empty.");
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
};
