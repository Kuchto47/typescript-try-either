import { transferMoney } from './transfer'
import { handleTransferError } from './utils'
import {getProblem, getSuccess, isSuccess} from "./eitherUtils";

export function main() {
  const transferResult = transferMoney('myPoorAccount', 'yourRichAccount', 100)
  if (isSuccess(transferResult)) {
    const newBalanceOfYourRichAccount = getSuccess(transferResult)
    console.log(newBalanceOfYourRichAccount)
    return
  } else {
    console.warn(handleTransferError(getProblem(transferResult)))
  }
}

