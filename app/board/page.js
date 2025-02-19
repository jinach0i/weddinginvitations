export default function Write() {
    return (
        <div>
            <h4>방명록</h4>
            <form action="/api/test" method="POST">
                <button type="submit">글쓰기</button>
            </form>
        </div>
    )
};
