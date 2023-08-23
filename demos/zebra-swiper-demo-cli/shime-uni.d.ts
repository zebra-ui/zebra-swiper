/* eslint-disable no-unused-vars */
import Vue from "vue";
declare module "vue/types/options" {
  type Hooks = App.AppInstance & Page.PageInstance;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> extends Hooks {
    /**
     * 组件类型
     */
    mpType?: string;
  }
}
