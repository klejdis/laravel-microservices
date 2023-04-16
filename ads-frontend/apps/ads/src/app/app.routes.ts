import { Route } from "@angular/router";
import { AuthModule } from "../auth/auth.module";
import { HomeModule } from "../home/home.module";

export const appRoutes: Route[] = [
  { path: '', loadChildren: () =>  HomeModule },
  { path: 'auth', loadChildren: () =>  AuthModule },
];
