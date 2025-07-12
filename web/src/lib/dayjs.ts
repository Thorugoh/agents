import dayjslib from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';

dayjslib.extend(relativeTime);

export const dayjs = dayjslib;
