import {
  FORTYFIVE,
  NOT_ALLOWED_DUPLICATED_NUMBERS,
  NOT_AVAILABLE_NUMBER_ERROR_MESSAGE,
  NOT_NUMBER_ERROR_MESSAGE,
  NOT_SIX_NUMBER_LENGTH_ERROR_MESSAGE,
  NOT_SORTED_ASCENDING_ORDER,
  ONE,
  SIX_NUMBERS,
} from "./constants/messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== SIX_NUMBERS) {
      throw new Error(NOT_SIX_NUMBER_LENGTH_ERROR_MESSAGE);
    }
    if (numbers.some((number) => isNaN(number)))
      throw new Error(NOT_NUMBER_ERROR_MESSAGE);
    if (numbers.some((number) => number < ONE || number > FORTYFIVE))
      throw new Error(NOT_AVAILABLE_NUMBER_ERROR_MESSAGE);
    if ([...new Set(numbers)].length !== SIX_NUMBERS)
      throw new Error(NOT_ALLOWED_DUPLICATED_NUMBERS);
    for (let index = 0; index < SIX_NUMBERS - 1; index += 1) {
      if (numbers[index] >= numbers[index + 1])
        throw new Error(NOT_SORTED_ASCENDING_ORDER);
    }
    if (numbers.some((number) => !Number.isInteger(number)))
      throw new Error(NOT_NUMBER_ERROR_MESSAGE);
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
