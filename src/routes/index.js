// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Folowing from '~/pages/Folowing';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/folowing',
        component: Folowing
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    }
]

// Private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }