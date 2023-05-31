export type ReactSelectTypes = {
 label: string;
 value: string;
}

export type ReactSelectPropsTypes = {
    options: any;
    isMultiple: boolean;
    getSelectedData: any;
    identifier: string;
    label?: string;
   }

   export type ReactSelectCatMap = {
        map(arg0: (category: any) => any): unknown;label: string; value: string; length: number
   }