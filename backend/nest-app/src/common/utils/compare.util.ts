import * as bcrypt from 'bcrypt';

export async function compare(
  plainText: string,
  hashedText: string,
): Promise<boolean> {
  const isCorrect = await bcrypt.compare(plainText, hashedText);
  return isCorrect;
}
