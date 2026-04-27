import type { ServiceDetailPage } from './types.js'
import { raePage } from './rae.js'
import { machiPage } from './machi.js'
import { welfarePage } from './welfare.js'
import { liveBgmPage } from './live-bgm.js'
import { komorebiPage } from './komorebi.js'
import { reportingPage } from './reporting.js'

export const serviceDetailPages: ServiceDetailPage[] = [
  raePage,
  machiPage,
  komorebiPage,
  welfarePage,
  liveBgmPage,
  reportingPage,
]