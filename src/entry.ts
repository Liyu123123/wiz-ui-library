import { App } from "vue";

import { MyButton } from "./button";
import "uno.css";
// 导出单独组件
export { MyButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
  },
};
