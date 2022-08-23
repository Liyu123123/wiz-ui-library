import { App } from "vue";

import { Button } from "./Button";
import "uno.css";
// 导出单独组件
export { Button };

export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
