import mapHandlers from '@/mocks/handles/map';
import isRequestHandles from '@/mocks/handles/isRequest';
import checkAdminHandles from '@/mocks/handles/checkAdmin';
import apothegmHandles from '@/mocks/handles/apothegm';

export const handlers = [
    ...mapHandlers,
    ...isRequestHandles,
    ...checkAdminHandles,
    ...apothegmHandles,
]
