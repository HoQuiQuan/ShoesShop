import * as bcrypt from 'bcrypt';

const salt = 10;
export async function hash(plainText: string): Promise<string> {
  const hashedText = await bcrypt.hash(plainText, salt);
  return hashedText;
}
