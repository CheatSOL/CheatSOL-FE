


// 날짜 timeAgo 정제 함수 (ex. '4시간 전', '3일 전', '2주 전', '2개월 전', '1년 전')
export function timeAgo(dateString) {
    const now = new Date();
    const articleDate = new Date(dateString);
    const differenceInMilliseconds = now - articleDate;
    
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);
    const differenceInWeeks = Math.floor(differenceInDays / 7);
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    switch (true) {
    case (differenceInYears > 0):
        return `${differenceInYears}년 전`;
    case (differenceInMonths > 0):
        return `${differenceInMonths}개월 전`;
    case (differenceInWeeks > 0):
        return `${differenceInWeeks}주 전`;
    case (differenceInDays > 0):
        return `${differenceInDays}일 전`;
    case (differenceInHours > 0):
        return `${differenceInHours}시간 전`;
    default:
        return '방금 전';
    }
}

//인스타그램 전용 timeAgo 함수
export function weekTimeAgo(dateString) {
    const now = new Date();
    const articleDate = new Date(dateString);
    const differenceInMilliseconds = now - articleDate;
    
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);
    const differenceInWeeks = Math.floor(differenceInDays / 7);
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    switch (true) {
    // case (differenceInYears > 0):
    //     return `${differenceInYears}년 전`;
    // case (differenceInMonths > 0):
    //     return `${differenceInMonths}개월 전`;
    case (differenceInWeeks > 0):
        return `${differenceInWeeks}주 전`;
    case (differenceInDays > 0):
        return `${differenceInDays}일 전`;
    case (differenceInHours > 0):
        return `${differenceInHours}시간 전`;
    default:
        return '방금 전';
    }
}