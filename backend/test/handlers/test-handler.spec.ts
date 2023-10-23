import { assert } from 'chai';
import sinon from 'sinon';
import { makeReqMock, makeResMock } from '../test-utils';
import { helloWorld, helloWorld2 } from '../../src/handlers/test-handler';

describe('Test Handler Tests', () => {
  it('should send a hello world message', () => {
    const req = makeReqMock();
    const res = makeResMock();

    const spy = sinon.spy(res, 'send');

    helloWorld(req, res);

    assert.isTrue(spy.getCall(0).calledWithExactly('This is a test!'));
  });

  it('should send a different hello world message', () => {
    const req = makeReqMock();
    const res = makeResMock();

    const spy = sinon.spy(res, 'send');

    helloWorld2(req, res);

    assert.isTrue(spy.getCall(0).calledWithExactly('This is another test!'));
  });
});
