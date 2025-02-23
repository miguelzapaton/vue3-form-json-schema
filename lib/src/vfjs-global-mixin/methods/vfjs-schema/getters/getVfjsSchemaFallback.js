import { get } from 'lodash-es';

function getVfjsSchemaFallback(key) {
  const keys = String(key).split('.');
  const schema = keys.reduce(this.getVfjsSchemaPath, '');

  return get(this.getVfjsSchema(), schema);
}

export default getVfjsSchemaFallback;
