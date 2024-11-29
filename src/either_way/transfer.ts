import { addMoneyTo, hasEnoughBalance, isValidAccount } from '../common/helpers'
import { Either } from './types'
import { createProblem, createSuccess } from './utils'

export type TransactionError = 'INVALID_SENDER_ACCOUNT' | 'INVALID_RECEIVER_ACCOUNT' | 'NOT_ENOUGH_BALANCE'

export function transferMoney(from: string, to: string, amount: number): Either<TransactionError, number> {
  if (!isValidAccount(from)) {
    createProblem<TransactionError>('INVALID_SENDER_ACCOUNT')
  }

  if (!isValidAccount(to)) {
    createProblem<TransactionError>('INVALID_RECEIVER_ACCOUNT')
  }

  if (!hasEnoughBalance(from, amount)) {
    createProblem<TransactionError>('NOT_ENOUGH_BALANCE')
  }

  return createSuccess(addMoneyTo(to, amount))
}
