// fetch 함수로 요청을 전송, 실패시 서버로부터 반환되는 메시지 함께 던진다.
export const fetcher = async (
    resource : RequestInfo,
    init? : RequestInit,

// eslint-disable-next-line @typescript-eslint/no-explicit-any
) : Promise<any> => {
    const res = await fetch(resource, init)

    if(!res.ok) {
        const errorRes = await res.json()
        const error = new Error(
            errorRes.message ?? 'API 요청 중에 에러가 발생했습니다.'
        )
        throw error
    }
    return res.json()
}