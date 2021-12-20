import { Container } from './styles';

export function Share() {
    return (
        <Container>
            <button type="button" className="bt1">
                Excluir
            </button>

            <button type="button" className="bt2">
                Like
            </button>

            <button type="button" className="bt3">
                Dislike
            </button>
        </Container>
    );
}