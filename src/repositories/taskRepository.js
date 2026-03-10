import { 
    PutCommand, 
    GetCommand, 
    ScanCommand, 
    DeleteCommand, 
    UpdateCommand 
} from "@aws-sdk/lib-dynamodb";
import { docClient, TABLE_NAME } from "../config/dynamoClient.js";
import { Task } from "../models/taskModel.js";

/**
 * Task Repository
 * Handles direct database operations using DynamoDB DocumentClient.
 */
export const taskRepository = {
    // Save a new task or overwrite an existing one
    async save(task) {
        const command = new PutCommand({
            TableName: TABLE_NAME,
            Item: task,
        });
        await docClient.send(command);
        return task;
    },

    // Retrieve a single task by its ID
    async getById(id) {
        const command = new GetCommand({
            TableName: TABLE_NAME,
            Key: { id },
        });
        const { Item } = await docClient.send(command);
        
        // Return a Task Model instance to ensure data consistency
        return Item ? new Task(Item) : null;
    },

    // Retrieve all tasks from the table (Scan operation)
    async getAll() {
        const command = new ScanCommand({
            TableName: TABLE_NAME,
        });
        const { Items } = await docClient.send(command);
        
        // Map raw items to Task Model instances
        return (Items || []).map(item => new Task(item));
    },

    // Delete a task by its ID
    async delete(id) {
        const command = new DeleteCommand({
            TableName: TABLE_NAME,
            Key: { id },
        });
        return await docClient.send(command);
    }
};
