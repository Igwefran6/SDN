// Import and export all components
const components = [];

const modules = import.meta.glob("./*.jsx", { eager: true });

Object.keys(modules).forEach((key) => {
  const componentName = key.replace("./", "").replace(".jsx", "");
  components.push(modules[key].default);
});

export default components;
