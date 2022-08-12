import { DatasetsComponent } from "../Home/datasets/datasets.component";
import { HomeComponent } from "../Home/Home.component";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: '', component: HomeComponent },
    {
      path: 'datasets', component: DatasetsComponent
    },
    { path:'GcommsHome', loadChildren: () => import('../Gcomms/OssApp.GcommsModule').then(m => m.GcommsModule)},
    { path:'NeXToolHome', loadChildren: () => import('../NeXTool/OssApp.NeXToolModule').then(m => m.NeXToolModule)}

];
