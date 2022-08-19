import { createApp } from "vue/dist/vue.esm-browser";

import SmartyUI from "./entry";
createApp({
  template: `
    
     <div>
         <MyButton color="red" round plain icon="search" >123</MyButton>
         <MyButton color="blue" >blue button</MyButton>
     </div>
        `,
})
  .use(SmartyUI)

  .mount("#app");
