import * as bcrypt from 'bcrypt';


export async function encryptPass(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export async function comparePass(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}