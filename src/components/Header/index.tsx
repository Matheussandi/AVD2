import logo from '../../assets/ROCKET.png';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={ logo } alt="rocketseat" />
                <button type="button">
                    Ingressar
                </button>
            </Content>
        </Container>

    )
}