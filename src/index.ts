import path from "path";
import fs from "fs";
import { Router } from "express";

export default async function routesLoader(): Promise<Router> {
    let router: Router = Router();
    const projectRoot = process.cwd();
    const folderRoutes = path.join(projectRoot, 'routes');

    if (fs.existsSync(folderRoutes)) {
        const files = fs.readdirSync(folderRoutes);
        for (const file of files) {
            const pathFile = `${folderRoutes}/${file}`;
            if (fs.statSync(pathFile).isFile() && path.extname(pathFile).toLocaleLowerCase() === '.js') {
                const fileName = file.split('.').shift();
                const routeModule = await import(pathFile);
                router.use('/' + fileName, routeModule.default || routeModule);
            }
        }
    }
    return router;
}