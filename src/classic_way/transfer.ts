import {addMoneyTo, hasEnoughBalance, isValidAccount} from "../common/helpers";
import {InvalidReceiverAccount, InvalidSenderAccount, NotEnoughBalance} from "./exceptions";

/**
 * Transfer money from one account to another
 * @param from whom to transfer
 * @param to whom to transfer
 * @param amount how much to transfer
 * @returns the new balance of the sender
 */
export function transferMoney(from: string, to: string, amount: number): number {
  if (!isValidAccount(from)) {
    throw new InvalidSenderAccount()
  }

  if (!isValidAccount(to)) {
    throw new InvalidReceiverAccount()
  }

  if (!hasEnoughBalance(from, amount)) {
    throw new NotEnoughBalance()
  }

  return addMoneyTo(to, amount)
}

