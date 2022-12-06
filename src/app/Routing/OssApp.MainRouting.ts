
import { AllDatasetsComponent } from "../all-datasets/all-datasets.component";
import { CompletedComponent } from "../completed/completed.component";
import { DatasetsComponent } from "../Home/datasets/datasets.component";
import { HomeComponent } from "../Home/Home.component";
import { InProgressComponent } from "../in-progress/in-progress.component";
import { OnHoldComponent } from "../on-hold/on-hold.component";
import { ReceivedComponent } from "../received/received.component";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: '', component: HomeComponent },
    {
      path: 'datasets', component: DatasetsComponent
    },
{
     path: 'AllDatasets', component: AllDatasetsComponent
},

{
  path:'InProgress', component: InProgressComponent
},
{
  path: 'OnHold', component:OnHoldComponent
},
{
  path: 'Received', component: ReceivedComponent
},
{
  path: 'Completed', component: CompletedComponent
},
    { path:'GcommsHome', loadChildren: () => import('../Gcomms/OssApp.GcommsModule').then(m => m.GcommsModule)},
    { path:'NeXToolHome', loadChildren: () => import('../NeXTool/OssApp.NeXToolModule').then(m => m.NeXToolModule)}

];
