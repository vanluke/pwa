import convict from 'convict';

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  version: {
    doc: 'API version',
    format: '*',
    default: '',
  },
  api: {
    ny: {
      url: {
        doc: 'API endpoint',
        format: '*',
        default: '',
      },
      key: {
        doc: 'API key',
        format: '*',
        default: '',
      },
    },
  },
});

config.loadFile(`./server/config/${config.get('env')}.json`);
config.validate({allowed: 'strict'});

export default config;
