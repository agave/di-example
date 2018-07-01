const Resolver = require('@lib/resolver');

class ControllersResolver {
  constructor(controllersDir, container) {
    return new Resolver(controllersDir, Resolver.use(container, 'models'));
  }
}

module.exports = ControllersResolver;
