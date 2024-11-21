export const getters = {
    doneTodos: (state: any) => {
        return state.todos.filter((todo: any) => todo.done)
    }
}
