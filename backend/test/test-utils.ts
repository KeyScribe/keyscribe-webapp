import { Request, Response } from 'express';

const makeReqMock = (): Request => {
  const req = {} as Request;
  return req;
};

const makeResMock = (): Response => {
  const res = {
    send: () => { },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    status: (code: number) => { },
  };

  return res as Response;
};

export {
  makeReqMock,
  makeResMock,
};
