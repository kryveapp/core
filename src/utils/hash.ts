import * as argon2 from "argon2";

/**
 * Checks if the hash matches the password.
 *
 * @param hash - The argon2 hash.
 * @param password - Plain text password.
 * @returns Whether or not the hash matches the password
 */
export async function passwordMatches(hash: string, password: string | Buffer): Promise<boolean> {
    try {
        return await argon2.verify(hash, password);
    } catch (err) {
        return false;
    }
}

/**
 * Creates a new argon2 hash.
 *
 * @param password - The plain text password.
 * @returns Generated argon2 hash based off the plain text password.
 */
export async function generateHash(password: string | Buffer): Promise<string> {
    try {
        return await argon2.hash(password, {
            type: argon2.argon2id,
        });
    } catch (err) {
        throw new Error("Failed to generate password hash");
    }
}
