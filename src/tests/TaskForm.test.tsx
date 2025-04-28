import TaskForm from '@/app/_components/TaskForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('TaskForm', () => {
  it('permite que o usuário adicione uma nova tarefa', async () => {
    const user = userEvent.setup()

    //função falsa para capturar se o onAddTask foi chamado
    const mockOnAddTask = jest.fn()

    // Renderizar o componente passando o mock como prop
    render(<TaskForm onAddTask={mockOnAddTask} />)

    // Procurar o input na tela
    const input = screen.getByPlaceholderText('Nova tarefa')

    // Procurar o botão na tela
    const button = screen.getByRole('button', { name: /adicionar/i })

    // Simular o usuário digitando no input
    await user.type(input, 'Estudar React')

    // Simular o clique no botão
    await user.click(button)

    // Verificar se a função mock foi chamada com o texto correto
    expect(mockOnAddTask).toHaveBeenCalledWith('Estudar React')

    // Verificar se o input foi limpo
    expect(input).toHaveValue('')
  })

  it('desabilita o botão se o input estiver vazio', () => {
    const onAddTaskMock = jest.fn()
    render(<TaskForm onAddTask={onAddTaskMock} />)

    const button = screen.getByRole('button', { name: /adicionar/i })

    expect(button).toBeDisabled()
  })
})