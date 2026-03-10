/**
 * Task Entity Model
 * Handles data structure for a single task.
 */
export class Task {
    /**
     * @param {Object} data - Raw data to initialize Task
     * @param {string} data.id - Unique ID (usually UUID)
     * @param {string} data.title - Task title
     * @param {string} [data.status='pending'] - Current task status
     * @param {string} [data.createdAt] - Creation timestamp
     */
    constructor({ id, title, status = 'pending', createdAt } = {}) { 
        // Default to empty object to prevent destructuring crash
        this.id = id;
        this.title = title;
        this.status = status;
        this.createdAt = createdAt || new Date().toISOString();
    }

    // Basic data validation methods within the Model

    // Helper methods for data conversion to save to DynamoDB if needed

}
