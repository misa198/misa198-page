import axios, { AxiosResponse } from "axios";

import { Contact } from "src/types/Contact";

export async function postContact(value: Contact): Promise<AxiosResponse> {
  const res = await axios.post(
    "https://sheet.best/api/sheets/fca2036a-e839-4dd2-ad56-ad2d3c2c9976",
    {
      ...value,
      time: new Date(),
    }
  );
  return res;
}
