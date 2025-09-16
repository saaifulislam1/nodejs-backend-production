import { Request } from 'express'
import { THttpError } from '../types/types'
import responseMessage from '../constant/responseMessage'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorstatuscode: number = 500): THttpError => {
    const errorobj: THttpError = {
        success: false,
        statusCode: errorstatuscode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl,
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null,
    }
    // log
    console.error(`CONTROLLER_ERROR`, {
        meta: errorobj,
    })
    if (config.ENV == EApplicationEnvironment.PRODUCTION) {
        delete errorobj.request.ip
        delete errorobj.trace
    }
    return errorobj
}
