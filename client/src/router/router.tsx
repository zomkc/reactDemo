import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import A404 from '../pages2/A404'
import Alogin from '../pages2/Alogin'
import Auser from '../pages2/Auser'

const staticRoutes: RouteObject[] = [
    {path:'/ogin',element:<Alogin/>},
    {path:'/',element:<Auser/>},
    {path:'/404',element:<A404/>},
]

export default function router(){
    // const router = useRoutes(staticRouter)
    return router;
}