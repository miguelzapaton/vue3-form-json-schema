import vfjsFieldMixin from '../vfjs-field-mixin';
import vfjsHelperCreateElement from '../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperCreateElement';
import { resolveComponent } from 'vue';

const fieldNativeComponentsNoResolve = ['input', 'select', 'textarea'];

const VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [vfjsFieldMixin],
  render() {
    return vfjsHelperCreateElement(
      // TODO remove workaround and add a method like vfjsFieldHelperIsNativeComponent to detect components that don't have to be resolved
      (typeof this.vfjsComponent !== 'string' || fieldNativeComponentsNoResolve.includes(this.vfjsComponent) ? this.vfjsComponent : resolveComponent(this.vfjsComponent)),
      {
        ...this.getVfjsAttributes(),
      },
      this.getVfjsChildren(),
    );
  },
};

export default VueFormJsonSchemaFieldComponent;
