import { ErrorCode } from '@/models/enums/errorCode.enum'
import HttpException from '@/utils/httpException'

class NotFound extends HttpException {
  constructor(error: { message: string; data?: any }) {
    super(404, error.message, ErrorCode.NOT_FOUND, error.data)
  }
}

export default NotFound
