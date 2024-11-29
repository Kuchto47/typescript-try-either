export class InvalidSenderAccount extends Error {
  constructor() {
    super('Invalid sender account')
  }
}

export class InvalidReceiverAccount extends Error {
  constructor() {
    super('Invalid receiver account')
  }
}

export class NotEnoughBalance extends Error {
  constructor() {
    super('Attempting to send more money than owned')
  }
}
