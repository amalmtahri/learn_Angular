import {DirectoryComponent} from "./directory/directory.component";
import { provideRoutes } from "@angular/router";
const APP_ROUTES = [
    { path:'directory', component: DirectoryComponent },

];

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES)
];