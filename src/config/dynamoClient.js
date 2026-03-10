import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

/**
 * Initialize DynamoDB Client
 * The SDK automatically retrieves the AWS_REGION from the Lambda environment.
 */
const client = new DynamoDBClient({});

/**
 * Initialize DynamoDB Document Client
 * This allows working with plain JavaScript objects instead of DynamoDB AttributeValues.
 */
export const docClient = DynamoDBDocumentClient.from(client);


/**
 * Environment variable for the DynamoDB table name.
 * This is populated via the template.yaml configuration.
 */
export const TABLE_NAME = process.env.TABLE_NAME;
