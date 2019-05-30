import { AdminRoute } from './admin';

export class AppRoute {

    private adminRoute: AdminRoute = new AdminRoute();
    public routes(app: any): void {
        app.get('/getData', this.adminRoute.getData);
        app.get('/getAdminList', this.adminRoute.getAdminList);
        app.get('/getBankDetails', this.adminRoute.getBankDetails);
    }
}