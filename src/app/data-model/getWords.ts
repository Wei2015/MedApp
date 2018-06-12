
import { WordResponse } from './wordresponse';

export interface GetWords {
  status: string,
  response: Array<WordResponse>
}