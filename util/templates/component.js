module.exports = (componentName) => ({
  content: `/* ${componentName} */
import React from "react";
import styles from "./${componentName}.module.css";
const ${componentName} = () => {
  return (
    <div className={styles.testStyle}>
      <h1>Remove h1 tag and start Writing your jsx here</h1>
    </div>
  );
};
export default ${componentName};`,
  extension: `.js`,
});

