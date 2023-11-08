import { Request, Response } from 'express';
import { stubInterface } from 'ts-sinon';

const makeReqStub = () => {
  const reqStub = stubInterface<Request>();
  return reqStub;
};

const makeResStub = () => {
  const resStub = stubInterface<Response>();
  resStub.send.returns(resStub);
  resStub.status.returns(resStub);
  return resStub;
};

export {
  makeReqStub,
  makeResStub,
};
