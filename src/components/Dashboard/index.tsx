import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            <div>
                <header>
                    <p>NOME DO EVENTO</p>
                  
                </header>
                <strong>Do While</strong>
                <strong>Alura</strong>
            </div>

            <div>
                <header>
                    <p>LOCAL</p>
                   
                </header>
                <strong>Youtube</strong>
                <strong>Youtube</strong>
            </div>

            <div>
                <header>
                    <p>DIA</p>
                    
                </header>
                <strong>01/12/2021</strong>
                <strong>08/12/2021</strong>
            </div>

            <div>
                <header>
                    <p>HORÁRIO</p>
                    
                </header>
                <strong>19:00</strong>
                <strong>21:00</strong>

            </div>

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