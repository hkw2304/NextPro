/* 
    루트 URL를 지정해 요청
    params을 이용해 사용자명과 비밀번호를 받아 성공하면 쿠키에 토큰이 설정되 인증
 */


import {fetcher} from '../../utils/index'
import {ApiContext, User} from '../../types/data.a'

export type SigninParams = {
    /*
        사용자명, 비밀번호 타입 설정
    */ 
    username: string
    password: string
}

/*
    인증 API(로그인)
    로그인 사용자를 리턴한다.
*/

const signin = async(
    context: ApiContext,
    params: SigninParams,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        },
    )
}

export default signin