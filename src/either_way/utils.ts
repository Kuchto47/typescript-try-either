import { TransactionError } from './transfer'

export const isStrictNever = (x: never): never => {
  throw new Error(`Never case reached with unexpected value ${x}`)
}

export function handleTransferError(error: TransactionError): string {
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
