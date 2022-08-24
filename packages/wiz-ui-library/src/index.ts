import { createApp } from "vue/dist/vue.esm-browser";

import SmartyUI from "./entry";
createApp({
  template: `
    
     <div>
         <Button color="red" round plain icon="search" >123</Button>
         <Button color="blue" >blue button</Button>
     </div>
        `,
})
  .use(SmartyUI)

  .mount("#app");
