export default function test(req, res) {
    console.log(123123);
    res.status(200).json('처리 완료되셨습니다.');
    res.status(400).json('유저측 잘못');
    res.status(500).json('서버기능 실행 실패');
};
