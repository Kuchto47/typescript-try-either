import {transferMoney} from "./transfer";
import {InvalidReceiverAccount, InvalidSenderAccount, NotEnoughBalance} from "./exceptions";

export function main() {
  try {
    const newBalanceOfYourRichAccount = transferMoney('myPoorAccount', 'yourRichAccount', 100)
    console.log(newBalanceOfYourRichAccount)
  } catch (e) {
    if (e instanceof InvalidSenderAccount || e instanceof InvalidReceiverAccount || e instanceof NotEnoughBalance) {
      console.error(e.message)
      return
    }
    console.warn('Unknown error', e)
    throw e
  }
}
