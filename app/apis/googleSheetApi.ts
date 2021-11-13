import { ggSheetApi } from '@constants/config';
import { Contact } from '@models/Contact';
import axios, { AxiosResponse } from 'axios';

export async function postContact(value: Contact): Promise<AxiosResponse> {
  const res = await axios.post(ggSheetApi, {
    ...value,
    time: new Date(),
  });
  return res;
}
