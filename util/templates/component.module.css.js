module.exports = (componentName) => ({
  content: `/* ${componentName} is created from command line. */
  .testStyle {
      background-color: green;
      color: white;
      border: 1px solid black;
      width: 360px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  `,
  extension: `.module.css`,
});
