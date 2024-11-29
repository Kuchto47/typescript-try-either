import {TransactionError, transferMoney} from './transfer'
import {getProblem, getSuccess, isStrictNever, isSuccess} from './utils'

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

function handleTransferError(error: TransactionError): string {
  switch (error) {
    case 'INVALID_RECEIVER_ACCOUNT': {
      return 'Receiving account does not exist!'
    }

    case 'INVALID_SENDER_ACCOUNT': {
      return "Sender's account does not exist!"
    }

    case 'NOT_ENOUGH_BALANCE': {
      return 'Sender has insufficient funds!'
    }
    default:
      return isStrictNever(error)
  }
}
