declare module "vue" {
    export interface GlobalComponents {
      PureDescriptions: typeof import("@snailadmin/layout")["SnailLayout"];
    }
  }
  
  export {};