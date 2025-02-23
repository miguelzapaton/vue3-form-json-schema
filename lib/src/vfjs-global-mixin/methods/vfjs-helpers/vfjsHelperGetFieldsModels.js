function vfjsHelperGetFieldsModels(fields, fieldModels = []) {
  return fields.reduce((models, { children = [], model }) => {
    if (model) {
      if (models.indexOf(model) === -1) {
        models.push(model);
      }
    }

    return this.vfjsHelperGetFieldsModels(children, models);
  }, fieldModels);
}

export default vfjsHelperGetFieldsModels;
