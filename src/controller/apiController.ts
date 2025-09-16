import { NextFunction, Request, Response } from 'express'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        // since we are not using the req param, we can replace the word with _, this will remove unusable var error
        try {
            throw new Error('Sending static Error!')
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (error) {
            httpError(next, error, req, 500)
        }
    },
}
