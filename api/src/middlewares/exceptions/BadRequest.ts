import HttpException from '@/utils/httpException'

class BadRequest extends HttpException {
  constructor(error: { message: string; errorCode?: string; data?: any }) {
    super(400, error.message, error.errorCode, error.data)
  }
}

export default BadRequest
