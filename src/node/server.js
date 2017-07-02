import configuration from './config/configuration';
import server from './httpapp';

process.title = 'not-a-checkbox-node';

configuration.init().then(config => server.start(config.port, config.staticPath));
