import { FC } from "react";
import NextNprogress from "nextjs-progressbar";

import theme from "themes/styled-components-theme";

const ProgressBar: FC = () => {
  return (
    <NextNprogress
      color={theme.colorPrimary}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow
      options={{
        showSpinner: false,
      }}
    />
  );
};

export default ProgressBar;
