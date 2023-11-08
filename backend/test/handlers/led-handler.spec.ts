import { assert } from 'chai';
import sinon from 'ts-sinon';
import { WebSocket } from 'ws';
import { makeReqStub, makeResStub } from '../test-utils';
import { ledOn } from '../../src/handlers/led-handler';
import * as websocket from '../../src/websockets/websocket-setup';

describe('LED Handler Tests', () => {
  describe('ledOn Tests', () => {
    let getConnectionsStub: sinon.SinonStub<[], WebSocket[]>;

    beforeEach(() => {
      getConnectionsStub = sinon.stub(websocket, 'getWebsocketConnections');
    });

    afterEach(() => {
      getConnectionsStub.restore();
    });

    it('should return 400 when no color specified', () => {
      const req = makeReqStub();
      const res = makeResStub();

      req.body = {};

      ledOn(req, res);

      assert.isTrue(res.status.calledOnce);
      assert.isTrue(res.send.calledOnce);
      assert.equal(res.status.getCall(0).args[0], 400);
    });

    it('should send a message over all available connections', () => {
      const req = makeReqStub();
      const res = makeResStub();

      const ws1Stub = {
        send: sinon.stub().returns(null),
        readyState: WebSocket.OPEN,
      };

      const ws2Stub = {
        send: sinon.stub().returns(null),
        readyState: WebSocket.OPEN,
      };

      const connections: WebSocket[] = [
        ws1Stub as unknown as WebSocket,
        ws2Stub as unknown as WebSocket,
      ];

      getConnectionsStub.onCall(0).returns(connections);

      req.body = { color: 'blue' };

      ledOn(req, res);

      assert.isTrue(res.status.calledOnce);
      assert.isTrue(res.send.calledOnce);
      assert.isTrue(getConnectionsStub.calledOnce);
      assert.isTrue(ws1Stub.send.calledOnce);
      assert.isTrue(ws2Stub.send.calledOnce);
      assert.equal(res.status.getCall(0).args[0], 200);
      assert.equal(ws1Stub.send.getCall(0).args[0], 'blue');
      assert.equal(ws2Stub.send.getCall(0).args[0], 'blue');
    });

    it('should not error if there are no available connections to send a message over', () => {
      const req = makeReqStub();
      const res = makeResStub();

      const connections: WebSocket[] = [];

      getConnectionsStub.onCall(0).returns(connections);

      req.body = { color: 'blue' };

      ledOn(req, res);

      assert.isTrue(res.status.calledOnceWithExactly(200));
      assert.isTrue(res.send.calledOnce);
      assert.isTrue(getConnectionsStub.calledOnce);
    });
  });
});
