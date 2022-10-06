import { DbName } from "./dataset.model";

    export class DbNameModel
    {

       dbNames: DbName[] = [];

        CurrentIndex: number = 0;

        PageCount: number = 0;


        isPageLoad!: boolean;
        filter!: string;

    }
