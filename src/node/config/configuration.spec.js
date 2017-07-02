import { expect } from 'chai';
import sinon from 'sinon';
import mockery from 'mockery';

describe('configAccess', () => {
  let sandbox;
  let originalAppId;

  before(() => {
    originalAppId = process.env.APP_ID ? process.env.APP_ID : '';
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true,
    });
  });

  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
    sandbox.restore();
  });

  after(() => {
    process.env.APP_ID = originalAppId;
  });

  it('should provide access to the config on initialisation', (done) => {
    process.env.APP_ID = '123asdf';

    const mockFS = { readFile: sandbox.stub() };
    mockery.registerMock('fs', mockFS);

    const configuration = require('./configuration').default; // eslint-disable-line global-require

    configuration.init().then((config) => {
      expect(config).to.deep.equal({ env: 'mocha', appId: '123asdf' });
      done();
    });

    mockFS.readFile.getCall(0).args[2](null, '{ "env": "mocha" }');
  });

  it('should provide access to the config keys after initialisation', (done) => {
    process.env.APP_ID = '123asdf';

    const mockFS = { readFile: sandbox.stub() };
    mockery.registerMock('fs', mockFS);

    const configuration = require('./configuration').default; // eslint-disable-line global-require

    configuration.init().then(() => {
      expect(configuration.retrieve('env')).to.equal('mocha');
      expect(configuration.retrieve('appId')).to.equal('123asdf');
      done();
    });

    mockFS.readFile.getCall(0).args[2](null, '{ "env": "mocha" }');
  });
});
