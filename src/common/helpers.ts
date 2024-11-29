export function isValidAccount(_account: string): boolean {
  return Math.random() > 0.5
}

export function hasEnoughBalance(_account: string, _amount: number): boolean {
  return Math.random() > 0.5
}

/**
 * Add money to an account
 * @param _account to whom give the money
 * @param amount how much money to give
 * @returns the new balance of the account
 */
export function addMoneyTo(_account: string, amount: number): number {
  return 47 + amount
}
