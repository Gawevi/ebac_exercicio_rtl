import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários à publicação', () => {
        render(<Post />)

        const textarea = screen.getByTestId('area de texto')
        const botao = screen.getByTestId('btn-comentar')

        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } })
        fireEvent.click(botao)

        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } })
        fireEvent.click(botao)

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
      });
});